import type { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (value === undefined || value === "") {
    throw new Error(
      `Missing required environment variable "${name}". Set it in .env.local (local) or your deployment environment (production).`
    );
  }
  return value;
}

const googleClientId = getRequiredEnv("GOOGLE_CLIENT_ID");
const googleClientSecret = getRequiredEnv("GOOGLE_CLIENT_SECRET");

const authSecret = process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET;
if (authSecret === undefined || authSecret === "") {
  throw new Error(
    'Missing NEXTAUTH_SECRET or AUTH_SECRET. Set one of them in .env.local or your deployment environment.'
  );
}

export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: authSecret,
};
