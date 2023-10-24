"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

function SignIn() {
  const { data: session } = useSession();

  return (
    <div>
      <button onClick={() => signOut()}>Sign In</button>

      <p className="text-slate-100">{session?.user?.name}</p>
      <p className="text-slate-100">{session?.user?.id}</p>
    </div>
  );
}

export default SignIn;
