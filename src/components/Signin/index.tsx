import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Header } from 'templates/Auth/styles';
import * as Yup from 'yup';

import Button from '@components/Button';
import Input from '@components/FormFields/Input';

import * as S from './styles';

interface FormFields {
  email: string;
  password: string;
  terms: boolean;
}

const schema = Yup.object({
  email: Yup.string().required('').email('Email inválido'),
  password: Yup.string().required(''),
  terms: Yup.boolean().oneOf(
    [true],
    'Deve aceitar os Termos e Condições de uso'
  ),
});

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState<string>();
  const methods = useForm<FormFields>({
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async ({ email, password }) => {
    if (error) {
      setError(null);
    }
    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      console.log(res);
      if (res?.error) {
        setError(res?.error);
      } else {
        router.push('/');
      }
    } catch (e) {
      console.log('POHA!: ', e);
    }
  };

  return (
    <S.Signup>
      <Header>
        <h1>Login</h1>
        <p>Insira seu email abaixo</p>
      </Header>
      <FormProvider {...methods}>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          {error ? <span>{error}</span> : null}
          <Input name="email" label="Email" autoComplete="off" />
          <Input name="password" label="Senha" type="password" />
          <Button type="submit" size="large" fullWidth>
            {!isSubmitting ? 'Continuar' : 'Aguarde...'}
          </Button>
          <p>
            Não possui uma conta?
            <Link href="/registro">Registre-se</Link>
          </p>
        </S.Form>
      </FormProvider>
    </S.Signup>
  );
};

export default Login;
