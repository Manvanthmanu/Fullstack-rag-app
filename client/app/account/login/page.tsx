"use client";

import { useState } from "react";
import {
  CssVarsProvider,
  Sheet,
  Typography,
  Input,
  Button,
  Alert,
} from "@mui/joy";
import GoogleLoginButton from "@/app/components/google";
import { useRouter } from "next/navigation";
import BackClick from "@/app/components/back";
import {login, loginWithGoogle } from "@/lib/auth";
import {account} from "@/lib/appwrite";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    await login(email, password);
    await account.get(); // confirm the session is active
    router.push("/webapp"); // safe redirect
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Login failed";
    setError(errorMessage);
  } finally {
    setLoading(false);
  }
};

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle(); // Will redirect to Google login
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Google login failed";
      setError(errorMessage);
    }
  };

  return (
    <CssVarsProvider defaultMode="dark">
      <Sheet
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `
            radial-gradient(circle at top left, rgba(11, 11, 13, 0.8), transparent 60%),
            radial-gradient(circle at bottom right, rgba(0, 0, 30, 0.8), transparent 60%),
            linear-gradient(135deg, #0d0f12 0%, #000000ff 100%)
          `,
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
            <img src="/logo.png" alt="App Logo" style={{ height: 50 }} />
          </div>

          {/* Title */}
          <Typography
            level="h4"
            textAlign="center"
            fontWeight="lg"
            mb={2}
            sx={{ color: "white" }}
          >
            Login to Your Account
          </Typography>

          {/* Google Login */}
          <GoogleLoginButton format="Login" onClick={handleGoogleLogin} />

          {/* Divider */}
          <div style={{ display: "flex", justifyContent: "center", margin: "12px 0" }}>
            <span style={{ color: "white", fontWeight: "bold" }}>Or</span>
          </div>

          {/* Error message */}
          {error && (
            <Alert color="danger" variant="soft" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Email Address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                height: 48,
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
                height: 48,
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
              loading={loading}
              variant="solid"
              sx={{ py: 1.2, fontWeight: "lg", backgroundColor: "#3f51b5" }}
            >
              Sign In
            </Button>
          </form>

          {/* New User Link */}
          <Typography level="body-sm" textAlign="center" mt={2}>
            New here?{" "}
            <Button
              variant="plain"
              sx={{
                paddingLeft: 0,
                color: "#3f51b5",
                "&:hover": {
                  textDecoration: "underline",
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => router.push("/account/register")}
            >
              Create an account
            </Button>
          </Typography>
        </Sheet>

        {/* Forgot Password */}
        <Button
          variant="plain"
          sx={{
            mt: 2,
            color: "#3f51b5",
            "&:hover": { textDecoration: "underline", backgroundColor: "transparent" },
          }}
          onClick={() => router.push("/account/forgot-password")}
        >
          Forgot password?
        </Button>
      </Sheet>
    </CssVarsProvider>
  );
}
