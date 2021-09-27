import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "components/Form";
import Input from "components/FormFields/Input";
import Button from "@components/Button";

import { Header, Redirect } from "@templates/Auth/styles";
import * as S from "./styles";

interface FormFields {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const schema = Yup.object({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string().required("Campo obrigatório").email("Email inválido"),
  password: Yup.string().required("Campo obrigatório"),
  passwordConfirmation: Yup.string()
    .required("Campo obrigatório")
    .oneOf([Yup.ref("password"), null], "Senhas não coinciden"),
});

const Signup = () => {
  const onSubmit = async () => {};

  return (
    <S.Signup>
      <Header>
        <h1>Inscreva-se</h1>
        <p>Preencha o formulario abaixo</p>
      </Header>
      <Form<FormFields>
        onSubmit={onSubmit}
        form={{ resolver: yupResolver(schema), reValidateMode: "onChange" }}
      >
        {() => {
          return (
            <>
              <Input label="Nome" name="name" autoComplete="off" />
              <Input label="Email" name="email" autoComplete="off" />
              <Input label="Senha" name="password" type="password" />
              <Input
                label="Confirmar senha"
                name="passwordConfirmation"
                type="password"
              />
              <p>Li e aceito os Termos e Condições de Uso</p>
              <Button type="submit" size="large" fullWidth>
                Continuar
              </Button>
            </>
          );
        }}
      </Form>
      <Redirect>
        Já possui uma conta? <span>Entre</span>
      </Redirect>
    </S.Signup>
  );
};

export default Signup;
