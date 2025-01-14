"use client";

import { signOut, useSession } from "next-auth/react";

const SignOutButton = () => {
  return <button onMouseDown={() => signOut()}>Log out</button>;
};

export default SignOutButton;
