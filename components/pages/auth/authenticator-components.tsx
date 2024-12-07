import { Button, Heading, Image, Text, useAuthenticator, useTheme, View } from '@aws-amplify/ui-react';

export const components = {
  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign='center' padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>&copy; All Rights Reserved</Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
          <div className='font-semibold leading-none tracking-tight'>Authentication</div>
          <div className="text-sm text-muted-foreground">Login or create an account to get started.</div>
        </Heading>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign='center'>
          <Button fontWeight='normal' onClick={toForgotPassword} size='small' variation='link'>
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
          <div className='font-semibold leading-none tracking-tight'>Authentication</div>
          <div className="text-sm text-muted-foreground">Login or create an account to get started.</div>
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign='center'>
          <Button fontWeight='normal' onClick={toSignIn} size='small' variation='link'>
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
          Enter Information:
        </Heading>
      );
    },
  },
  SetupTotp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
          Enter Information:
        </Heading>
      );
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
          Enter Information:
        </Heading>
      );
    },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
          Enter Information:
        </Heading>
      );
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
          Enter Information:
        </Heading>
      );
    },
  },
};

export const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your email',
    },
  },
  signUp: {
    password: {
      label: 'Password:',
      placeholder: 'Enter your Password:',
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      label: 'Confirm Password:',
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  forgotPassword: {
    username: {
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTotp: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};
