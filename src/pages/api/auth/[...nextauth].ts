import { Magic } from "@magic-sdk/admin";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const magic = new Magic(process.env.MAGIC_SK);

export default NextAuth({
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Providers.Credentials({
      name: "Autentificação",
      credentials: {
        didToken: { label: "DID Token", type: "text" },
      },
      async authorize({ didToken }) {
        magic.token.validate(didToken);
        const metadata = await magic.users.getMetadataByToken(didToken);
        return { ...metadata };
      },
    }),
  ],
});
