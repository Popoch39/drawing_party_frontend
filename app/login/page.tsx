import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const handleCLick = async (provider: string) => {
    await signIn();
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Connectez-vous pour accéder à votre compte.</p>

      <div></div>
    </div>
  );
}
