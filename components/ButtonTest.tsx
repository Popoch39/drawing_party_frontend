"use client";
import { signIn } from "next-auth/react";

const ButtonTest = () => {
  const handleCLick = async (provider: string) => {
    await signIn(provider);
  };

  return (
    <div onMouseDown={() => handleCLick("discord")}>
      Se connecter avec discord
    </div>
  );
};

export default ButtonTest;
