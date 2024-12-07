import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        scopes: ['email', 'profile'],
      },
      logoutUrls: ['http://localhost:3000/', 'https://main.d1m7z4lj27zyc9.amplifyapp.com/'],
      callbackUrls: ['http://localhost:3000/dashboard', 'https://main.d1m7z4lj27zyc9.amplifyapp.com/dashboard'],
    },
  },
});
