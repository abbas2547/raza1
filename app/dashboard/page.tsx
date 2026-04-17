import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export const metadata: Metadata = {
  title: "Dashboard | Eluue WebServices",
  description: "Your protected Eluue account dashboard.",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-bg px-4 py-28 text-slate-900 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-8 h-72 w-72 rounded-full bg-orange-300/25 blur-3xl" />
        <div className="absolute right-8 bottom-8 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-3xl rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-xl backdrop-blur-md sm:p-8">
        <p className="text-xs tracking-[0.2em] text-orange-600 uppercase">
          Protected Area
        </p>
        <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
          Welcome, {session.user.name ?? "Guest"}
        </h1>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          You are logged in with Google and can now access your private workspace.
        </p>

        <div className="mt-6 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name ?? "User avatar"}
              width={56}
              height={56}
              className="rounded-full"
            />
          ) : (
            <div className="h-14 w-14 rounded-full bg-orange-100" />
          )}
          <div>
            <p className="text-sm font-medium text-slate-800">
              {session.user.name ?? "No name"}
            </p>
            <p className="text-sm text-slate-600">
              {session.user.email ?? "No email available"}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-full bg-orange-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
