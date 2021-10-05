import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Header } from 'templates/Auth/styles';
import * as Yup from 'yup';

import Button from '@components/Button';
import Checkbox from '@components/FormFields/Checkbox';
import Input from '@components/FormFields/Input';

import * as S from './styles';

interface FormFields {
  name: string;
  cpf: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  terms: boolean;
}

const schema = Yup.object({
  name: Yup.string().required(''),
  cpf: Yup.string(),
  phone: Yup.string().required(''),
  email: Yup.string().required('').email('Email inválido'),
  password: Yup.string().required(''),
  passwordConfirmation: Yup.string()
    .required('Campo obrigatório')
    .oneOf([Yup.ref('password'), null], 'Senhas não coinciden'),
  terms: Yup.boolean().oneOf(
    [true],
    'Deve aceitar os Termos e Condições de uso'
  ),
});

const Signup = () => {
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

  const onSubmit = async (formData) => {
    if (error) {
      setError(null);
    }
    try {
      const data = await fetch('/api/user/create', {
        method: 'POST',
        body: JSON.stringify({ ...formData }),
      }).then((res) => res.json());
      console.log(data);
      if (data?.error) {
        setError(data?.error);
      } else {
        router.push('/');
      }
    } catch (e) {
      // console.log(e);
    }
  };

  return (
    <S.Signup>
      <Header>
        <h1>Registrar-se</h1>
        <p>Preencha o formulario abaixo</p>
      </Header>
      <FormProvider {...methods}>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          {error ? <span>{error}</span> : null}
          <Input name="name" label="Nome completo" autoComplete="off" />
          <Input name="cpf" label="CPF" autoComplete="off" />
          <Input name="phone" label="Telefone" autoComplete="off" />
          <Input name="email" label="Email" autoComplete="off" />
          <Input name="password" label="Senha" type="password" />
          <Input
            name="passwordConfirmation"
            label="Confirmar senha"
            type="password"
          />
          <Checkbox
            name="terms"
            label="Li e aceito os Termos e Condições de Uso"
          />
          <Button type="submit" size="large" fullWidth>
            {!isSubmitting ? 'Continuar' : 'Aguarde...'}
          </Button>
          <p>
            Já possui uma conta?
            <Link href="/login">Entre</Link>
          </p>
        </S.Form>
      </FormProvider>
    </S.Signup>
  );
};

export default Signup;
