import checkoutNodeJssdk from '@paypal/checkout-server-sdk';

const configureEnvironment = function() {
  return new checkoutNodeJssdk.core.SandboxEnvironment(
    process.env.PAYPAL_CLIENT_ID as string,
    process.env.PAYPAL_CLIENT_SECRET as string
  );
};

const client = function() {
  return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment());
};

export default client;
