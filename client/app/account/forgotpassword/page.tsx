"use client";

import { useState } from "react";
import {
  CssVarsProvider,
  Sheet,
  Typography,
  Input,
  Button,
} from "@mui/joy";
import { useRouter } from "next/navigation";
import BackClick from "@/app/components/back";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password for:", email); // Hook to Appwrite's password recovery here
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
            Forgot Password
          </Typography>

          <Typography
            level="body-sm"
            textAlign="center"
            mb={3}
            sx={{ color: "rgba(255,255,255,0.7)" }}
          >
            Enter your email address and we’ll send you instructions to reset your password.
          </Typography>

          {/* Form */}
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

            <Button
              type="submit"
              fullWidth
              variant="solid"
              sx={{
                py: 1.2,
                fontWeight: "lg",
                backgroundColor: "#3f51b5",
              }}
            >
              Send Reset Link
            </Button>
          </form>

          {/* Back to login */}
          <Typography
            level="body-sm"
            textAlign="center"
            mt={2}
          >
            Remembered your password?{" "}
            <Button
              variant="plain"
              sx={{
                paddingLeft: 0,
                textDecoration: "none",
                color: "#3f51b5",
                "&:hover": {
                  textDecoration: "underline",
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => router.push("/account/login")}
            >
              Login
            </Button>
          </Typography>
        </Sheet>
      </Sheet>
    </CssVarsProvider>
  );
}
