"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { account } from "@/lib/appwrite";

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const [checking, setChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const verifySession = async () => {
      try {
        await account.get(); // Check if session exists
      } catch {
        router.push("/account/login");
      } finally {
        setChecking(false);
      }
    };

    if (!loading) {
      verifySession();
    }
  }, [loading, router]);

  if (loading || checking) return <div>Loading...</div>;

  return <>{children}</>;
}
