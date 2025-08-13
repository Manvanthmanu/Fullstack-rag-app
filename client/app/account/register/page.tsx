"use client";

import { useState } from "react";
import {
  CssVarsProvider,
  Sheet,
  Typography,
  Input,
  Button,
} from "@mui/joy";
import GoogleLoginButton from "@/app/components/google";
import { useRouter } from "next/navigation";
import BackClick from "../../components/back";
import { register, loginWithGoogle } from "@/lib/auth"


export default function RegisterPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);


  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // ✅ stops form reload
    setLoading(true);
    setError(null); // ✅ clear old error

    try {
      await register(email, password, name);
      router.push("/webapp");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Registration failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <CssVarsProvider defaultMode="dark">
      <Sheet
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: `
            radial-gradient(circle at top left, rgba(11, 11, 13, 0.8), transparent 60%),
            radial-gradient(circle at bottom right, rgba(0, 0, 30, 0.8), transparent 60%),
            linear-gradient(135deg, #0d0f12 0%, #000000ff 100%)
          `,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <BackClick />

        <Sheet
          variant="outlined"
          sx={{
            p: 4,
            borderRadius: "md",
            boxShadow: "lg",
            width: 360,
            bgcolor: "#121212",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <img
              src="/logo.png"
              alt="App Logo"
              style={{ height: 50 }}
            />
          </div>

          {/* Title */}
          <Typography
            level="h4"
            textAlign="center"
            fontWeight="lg"
            mb={2}
            sx={{ color: "white" }}
          >
            Create Your Account
          </Typography>

          {/* Google Sign-Up */}
          <GoogleLoginButton format='Register' onClick={loginWithGoogle} />
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <span style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>Or</span>
          </div>

          {/* Sign-Up Form */}
          {error && (
            <Typography level="body-sm" sx={{ color: "red", mb: 1 }}>
              {error}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Full Name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                height: 42,
                mb: 2,
                backgroundColor: "rgba(207, 207, 207, 0.1)",
                color: "white",
                borderColor: "transparent",
                "&:focus-within": {
                  borderColor: "#3f51b5",
                  boxShadow: `0 0 0 2px #3f51b5`,
                },
              }}
            />

            <Input
              placeholder="Email Address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                height: 42,
                mb: 2,
                backgroundColor: "rgba(207, 207, 207, 0.1)",
                color: "white",
                borderColor: "transparent",
                "&:focus-within": {
                  borderColor: "#3f51b5",
                  boxShadow: `0 0 0 2px #3f51b5`,
                },
              }}
            />

            <Input
              placeholder="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                height: 42,
                mb: 2,
                backgroundColor: "rgba(207, 207, 207, 0.1)",
                color: "white",
                borderColor: "transparent",
                "&:focus-within": {
                  borderColor: "#3f51b5",
                  boxShadow: `0 0 0 2px #3f51b5`,
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="solid"
              sx={{ py: 1.2, fontWeight: "lg", backgroundColor: "#3f51b5" }}
              disabled={loading}
            >
              Sign Up
            </Button>
          </form>

          {/* Already have an account link */}
          <Typography
            level="body-sm"
            textAlign="center"
            mt={2}
          >
            Already have an account?
            <Button variant="plain" sx={{ paddingLeft: 0, textDecoration: "none", color: "#3f51b5", "&:hover": { textDecoration: "underline", backgroundColor: "transparent" } }} onClick={() => router.push("/account/login")}>
              Sign in
            </Button>
          </Typography>
        </Sheet>
      </Sheet>
    </CssVarsProvider>
  );
}
