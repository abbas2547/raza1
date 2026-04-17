"use client";

import { signIn } from "next-auth/react";

export default function GoogleSignInButton() {
  return (
    <button
      type="button"
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.766 12.276c0-.917-.077-1.834-.243-2.73H12.24v5.167h6.48a5.518 5.518 0 0 1-2.4 3.624v3.002h3.87c2.268-2.087 3.576-5.166 3.576-9.063Z"
          fill="#4285F4"
        />
        <path
          d="M12.24 24c3.24 0 5.96-1.074 7.946-2.916l-3.87-3.002c-1.075.73-2.45 1.152-4.076 1.152-3.13 0-5.783-2.113-6.734-4.952H1.513v3.1A11.997 11.997 0 0 0 12.24 24Z"
          fill="#34A853"
        />
        <path
          d="M5.506 14.282a7.227 7.227 0 0 1 0-4.563v-3.1H1.513a12 12 0 0 0 0 10.763l3.993-3.1Z"
          fill="#FBBC04"
        />
        <path
          d="M12.24 4.766c1.783 0 3.374.614 4.632 1.816l3.463-3.463C18.195 1.13 15.478 0 12.24 0 7.513 0 3.39 2.698 1.513 6.62l3.993 3.1c.95-2.84 3.604-4.953 6.734-4.953Z"
          fill="#EA4335"
        />
      </svg>
      Continue with Google
    </button>
  );
}
