import { calculateOrderAmount } from '@/actions/orderActions';
import { Schema } from '@/amplify/data/resource';
import outputs from '@/amplify_outputs.json';
import PaypalClient from '@/utils/paypal';
import paypal from '@paypal/checkout-server-sdk';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import { NextResponse } from 'next/server';

Amplify.configure(outputs);

const client = generateClient<Schema>();

export async function POST(request: Request) {
  const body = await request.json();
  const { email, plan } = body;
  const amount = calculateOrderAmount(plan, false);

  const paypalClient = PaypalClient();

  try {
    const request = new paypal.orders.OrdersCreateRequest();
    request.headers['Prefer'] = 'return=representation';
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: amount.toString(),
          },
        },
      ],
    });

    const response = await paypalClient.execute(request);
    if (response.statusCode !== 201) {
      return NextResponse.json(
        {
          success: false,
          message: 'Some error occurred',
        },
        { status: 500 }
      );
    }

    const order = await client.models.Order.create({
      email,
      amount,
      timestamp: new Date().toISOString(),
      status: 'pending',
      externalId: response.result.id
    });
    if (!order.data?.id) {
      return NextResponse.json(
        {
          success: false,
          error: order.errors,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      orderId: order.data.id,
      orderExternalId: order.data.externalId,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 500 }
    );
  }
}
