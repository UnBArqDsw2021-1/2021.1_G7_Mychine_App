import { signIn } from 'next-auth/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Header } from 'templates/Auth/styles';
import * as Yup from 'yup';

import Button from '@components/Button';
import Form from '@components/Form';
import Input from '@components/FormFields/Input';

import * as S from './styles';

interface FormFields {
  email: string;
}

const schema = Yup.object({
  email: Yup.string().required('Campo obrigatório').email('Email inválido'),
});

const Login = () => {
  const onSubmit = async ({ email }) => {
    await signIn('credentials', { email, password: '123456' });
  };

  return (
    <S.Signup>
      <Header>
        <h1>Login</h1>
        <p>Insira seu email abaixo</p>
      </Header>
      <Form<FormFields>
        onSubmit={onSubmit}
        form={{ resolver: yupResolver(schema), reValidateMode: 'onChange' }}
      >
        {() => (
          <>
            <Input label="Email" name="email" autoComplete="on" />
            <p>Li e aceito os Termos e Condições de Uso</p>
            <Button type="submit" size="large" fullWidth>
              Continuar
            </Button>
          </>
        )}
      </Form>
    </S.Signup>
  );
};

export default Login;
