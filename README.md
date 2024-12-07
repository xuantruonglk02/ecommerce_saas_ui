## AWS Amplify Next.js (App Router) Starter Template

This repository provides a starter template for creating applications using Next.js (App Router) and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Overview

This template equips you with a foundational Next.js application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Preparing resources

### Stripe account

1. Create Stripe account. The new account is in test mode as soon as you create it. `https://docs.stripe.com/get-started/account`

2. Collect your `Publishable key` and `Secret key` from `https://dashboard.stripe.com/test/apikeys`

3. Write your keys to the `.env` file:

   ```
   STRIPE_SECRET_KEY=<Secret key>
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<Publishable key>
   ```

### Google Console

1. Setup your Google Console following this document: https://docs.amplify.aws/gen1/nextjs/build-a-backend/auth/add-social-provider/

2. Collect your `Client ID` and `Client Secret`, then write them to the `.env` file:

   ```
   GOOGLE_CLIENT_ID=<Client ID>
   GOOGLE_CLIENT_SECRET=<Client Secret>
   ```

### Source code

Push this source to a Git provider, for example `Github`.

## Deploying to AWS

1. Go to creating new Amplify app: https://ap-southeast-1.console.aws.amazon.com/amplify/create/add-repo

2. Choose where to get your source code: Select the repository and the main branch

3. In **App settings** -> **Advanced settings**, add new environment variables by `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in your `.env` file

4. Click **Save and deploy** to deploy the app. Meanwhile, go to **Hosting** -> **Secrets** and add your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` into app secrets

5. Waiting for deployment. If get an error, re-click deploy in order to the app can get the secrets

6. After the deployment finish successfully, take note the app domain

7. Go to Google Console, update the **Authorized domains**, **Authorized JavaScript origins** and **Authorized redirect URIs** with your app domain

## Setting up for local running

1. Go to Google Console, update the **Authorized domains**, **Authorized JavaScript origins** and **Authorized redirect URIs** with localhost

2. Login AWS Console, go to your amplify app console, go to **Deployed backend resources** then download `amplify_outputs.json` and put it into the root path of the project

3. Run:

   ```
   npm install
   npm run dev
   ```

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
