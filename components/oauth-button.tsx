"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { capitalize } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface OauthButtonProps {
  provider: "github" | "google";
  icon: React.ReactNode;
  text: string;
  isLoading: boolean;
  isDisabled: boolean;
  setLoading: (state: boolean) => void;
}

export const OauthButton = ({
  provider,
  icon,
  isDisabled,
  setLoading,
  isLoading,
}: OauthButtonProps) => {
  const router = useRouter();
  useEffect(() => {
    return () => setLoading?.(false);
  }, [setLoading]);

  return (
    <Button
      type="button"
      variant="outline"
      isLoading={isLoading}
      disabled={isDisabled}
      onClick={async () => {
        setLoading(true);
        signIn(provider);
        router.refresh();
      }}
    >
      <div className="hover:text-gray-12 flex items-center pr-3">{icon}</div>
      <span className="text-gray-12">Iniciar sesión con {capitalize(provider)}</span>
    </Button>
  );
};
