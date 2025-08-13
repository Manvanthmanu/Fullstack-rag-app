import { Button } from "@mui/joy";
import Image from "next/image";

export default function GoogleLoginButton({
  format,
  onClick,
}: {
  format: string;
  onClick: () => void;
}) {
  return (
    <Button
      fullWidth
      size="lg"
      variant="soft"
      color="neutral"
      onClick={onClick}
      startDecorator={
        <Image
          src="/google.svg" // Place in public/
          alt="Google"
          width={20}
          height={20}
        />
      }
      sx={{
        mb: 1,
        fontWeight: "md",
        color: "rgba(207, 207, 207, 1)",
        bgcolor: "rgba(207, 207, 207, 0.1)",
        "&:hover": {
          bgcolor: "rgba(238, 252, 255, 1)",
          color: "black",
        },
      }}
    >
      {format} with Google
    </Button>
  );
}
