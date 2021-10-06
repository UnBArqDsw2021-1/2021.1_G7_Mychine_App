import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import api from '@services/api';

export default NextAuth({
  session: {
    jwt: true,
    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.SECRET_KEY,
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {
          label: 'E-mail',
          type: 'text',
          placeholder: 'nome de usuário',
        },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        try {
          const res = await api.post(`/api/auth/login`, { ...credentials });
          if (res.statusText === 'OK' && res.data) {
            return res.data;
          }
          return null;
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
});
