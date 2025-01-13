"use client";

import { useSession } from "next-auth/react";

const SignOutButton = () => {
  const { data: session } = useSession();

  console.log(session);

  return null;
};

export default SignOutButton;
