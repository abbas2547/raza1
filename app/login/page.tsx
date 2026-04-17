import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import GoogleSignInButton from "./GoogleSignInButton";

type LoginPageProps = {
  searchParams?: {
    error?: string | string[];
  };
};

function getLoginErrorMessage(errorCode?: string) {
  switch (errorCode) {
    case "OAuthSignin":
    case "OAuthCallback":
    case "OAuthCreateAccount":
      return "Google sign-in failed. Please try again.";
    case "AccessDenied":
      return "Access was denied. Please use an allowed Google account.";
    case "Verification":
      return "Your login link/session expired. Please sign in again.";
    default:
      return "Sign-in failed. Please try again.";
  }
}

export const metadata: Metadata = {
  title: "Login | Eluue WebServices",
  description: "Sign in with Google to access Eluue WebServices.",
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const session = await getServerSession(authOptions);
  const rawError = searchParams?.error;
  const errorCode = Array.isArray(rawError) ? rawError[0] : rawError;
  const errorMessage = errorCode ? getLoginErrorMessage(errorCode) : null;

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-300/25 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      <section className="relative w-full max-w-md rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-xl backdrop-blur-md sm:p-8">
        <div className="space-y-2 text-center">
          <p className="text-xs tracking-[0.2em] text-orange-600 uppercase">
            Welcome Back
          </p>
          <h1 className="text-2xl font-semibold sm:text-3xl">Sign in</h1>
          <p className="text-sm text-slate-600 sm:text-base">
            Continue to your Eluue workspace securely with Google.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {errorMessage ? (
            <div
              role="alert"
              className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
            >
              {errorMessage}
            </div>
          ) : null}
          <GoogleSignInButton />
          <p className="text-center text-xs text-slate-500">
            By continuing, you agree to our terms and privacy policy.
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
