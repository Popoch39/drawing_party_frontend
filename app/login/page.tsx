"use client";
import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/login-form";
import useUserStore from "@/stores/userStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/apis/user";
import { saveJWT } from "@/utils/auth";
import { useCallback, useEffect } from "react";

export default function LoginPage() {
  const { setUser } = useUserStore();

  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  // might need to take a look at that, looks awfull
  useEffect(() => {
    if (token) {
      saveJWT(token);
    }
  }, [token]);

  const { isLoading, isError, data } = useQuery({
    queryKey: ["user", token],
    queryFn: async () => {
      if (!token) throw new Error("No token provided");
      return fetchUser(token);
    },
    enabled: !!token,
  });

  const handleUserUpdate = useCallback(async (): Promise<void> => {
    console.log(data);
    if (data) {
      await Promise.resolve(setUser(data));
      router.push("/");
    }
  }, [data, setUser, router]);

  useEffect(() => {
    handleUserUpdate();
  }, [handleUserUpdate]);

  if (isError) {
    return (
      <div className="flex min-h-svh items-center justify-center bg-muted p-6">
        <p className="text-destructive">Une erreur est survenue</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Acme Inc.
        </a>
        <LoginForm isLoading={isLoading} />
      </div>
    </div>
  );
}
