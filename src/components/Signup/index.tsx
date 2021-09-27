import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/Button";
import Form from "components/Form";
import Input from "components/FormFields/Input";
import { Magic } from "magic-sdk";
import { useRouter } from "next/router";
import { signIn } from "next-auth/client";
import { Header, Redirect } from "templates/Auth/styles";
import * as Yup from "yup";

import * as S from "./styles";

const magic =
  typeof window !== "undefined" &&
  new Magic(process.env.NEXT_PUBLIC_MAGIC_PK || "a", { locale: "pt" });
interface FormFields {
  email: string;
}

const schema = Yup.object({
  email: Yup.string().required("Campo obrigatório").email("Email inválido"),
});

const Signup = () => {
  const router = useRouter();
  const onSubmit = async ({ email }) => {
    if (!magic) throw new Error(`magic not defined`);

    const didToken = await magic.auth.loginWithMagicLink({ email });

    await signIn("credentials", {
      didToken,
      callbackUrl: router.query.callbackUrl as string,
    });
  };

  return (
    <S.Signup>
      <Header>
        <h1>Inscreva-se</h1>
        <p>Insira seu email abaixo</p>
      </Header>
      <Form<FormFields>
        onSubmit={onSubmit}
        form={{ resolver: yupResolver(schema), reValidateMode: "onChange" }}
      >
        {() => {
          return (
            <>
              <Input label="Email" name="email" autoComplete="on" />
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
