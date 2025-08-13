"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@mui/joy";

export default function BackClick() {
  const router = useRouter();

  return (
    <Button
      variant="plain"
      size="md"
      startDecorator={<ChevronLeft size={16}/>}
      onClick={() => router.push("/")}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "fit-content",
        color: "rgba(207, 207, 207, 1)",
        fontWeight: 500,
        '&:hover': {
          backgroundColor: "transparent",
          textDecoration: "underline",
        },
      }}
    >
      Back
    </Button>
  );
}
