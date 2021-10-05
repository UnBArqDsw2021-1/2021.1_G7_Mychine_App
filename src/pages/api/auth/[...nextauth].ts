import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  pages: {
    signIn: '/login',
  },

  session: {
    jwt: true,
  },

  jwt: {
    secret: process.env.SECRET_KEY,
  },

  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        didToken: { label: 'DID Token', type: 'text' },
      },

      async authorize(credentials) {
        const res = await fetch(`${process.env.HOST}/api/auth/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });

        const user = await res.json();
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
});
