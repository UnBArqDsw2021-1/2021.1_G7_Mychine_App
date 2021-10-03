import LoginForm from '@components/Login';
import AuthTemplate from '@templates/Auth';
import PageTemplate from '@templates/Page';

const Login = () => (
  <PageTemplate fullWidth>
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  </PageTemplate>
);

export default Login;
