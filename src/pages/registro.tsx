import SignupForm from '@components/Signup';
import AuthTemplate from '@templates/Auth';
import PageTemplate from '@templates/Page';

const Login = () => (
  <PageTemplate fullWidth>
    <AuthTemplate>
      <SignupForm />
    </AuthTemplate>
  </PageTemplate>
);

export default Login;
