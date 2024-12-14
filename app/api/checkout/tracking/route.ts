import { Schema } from '@/amplify/data/resource';
import outputs from '@/amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import { NextResponse } from 'next/server';

Amplify.configure(outputs);

const client = generateClient<Schema>();

export const POST = async (request: Request) => {
  const body = await request.json();
  const { orderId } = body;
  
  try {
    const order = await client.models.Order.get({
      id: orderId,
    });
    if (!order.data?.id) {
      return NextResponse.json({
        success: false,
        error: order.errors,
      }, { status: 500 });
    }
  
    await client.models.Order.update({
      id: orderId,
      status: 'done',
    });
  
    return NextResponse.json({
      success: true,
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
};
