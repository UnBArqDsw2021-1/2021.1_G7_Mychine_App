import { signIn } from 'next-auth/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Magic } from 'magic-sdk';
import { Header } from 'templates/Auth/styles';
import * as Yup from 'yup';

import Button from '@components/Button';
import Form from '@components/Form';
import Checkbox from '@components/FormFields/Checkbox';
import Input from '@components/FormFields/Input';

import * as S from './styles';

const magic =
  typeof window !== 'undefined' &&
  new Magic(process.env.NEXT_PUBLIC_MAGIC_PK || 'a', { locale: 'pt' });

interface FormFields {
  email: string;
  terms: boolean;
}

const schema = Yup.object({
  email: Yup.string().required('Campo obrigatório').email('Email inválido'),
  terms: Yup.boolean().oneOf([true], 'Deve aceitar os Termos e Condições'),
});

const Login = () => {
  const onSubmit = async ({ email }) => {
    if (!magic) throw new Error('magic not defined');

    const didToken = await magic.auth.loginWithMagicLink({ email });

    await signIn('credentials', {
      didToken,
      callbackUrl: `${window.location.origin}`,
    });
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
            <Input name="email" label="Email" autoComplete="off" />
            <Checkbox
              name="terms"
              label="Li e aceito os Termos e Condições de Uso"
            />
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
