"use client";
import useUserStore from "@/stores/userStore";
import { useRouter } from "next/navigation";

export default function Home() {
  const { connectedUser, setUser } = useUserStore();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    router.push("/login");
  };

  if (!connectedUser) {
    router.push("login");
    return null;
  }
  return (
    <>
      <p>{JSON.stringify(connectedUser)}</p>;
      <button onMouseDown={logout}>Logout</button>
    </>
  );
}
