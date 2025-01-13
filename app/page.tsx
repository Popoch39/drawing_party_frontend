import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import SignOutButton from "@/components/signOutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Dashboard</h1>
      <SignOutButton />
      {session ? (
        <p>Welcome, {session.user?.name || "User"}!</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}
