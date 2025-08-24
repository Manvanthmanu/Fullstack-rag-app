"use client";

import * as React from "react";
import {
  Avatar,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton
} from "@mui/joy";
import { logout, getCurrentUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [user, setUser] = React.useState<{name?: string; avatarUrl?: string} | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    (async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    })();
  }, []);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl((prev) => (prev ? null : event.currentTarget));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    router.push("/account/login");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <IconButton
        onClick={handleToggle}
        variant="plain"
        sx={{
          p: 0,
          "&:hover": { backgroundColor: "transparent" }
        }}
      >
        {/* Gradient border avatar */}
        <Box
          sx={{
            p: "2px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)"
          }}
        >
          <Avatar
            alt={user?.name || "User"}
            size="sm"
            src={user?.avatarUrl || ""}
            sx={{ border: "2px solid #000" }}
          />
        </Box>
        <Typography
          sx={{
            ml: 1,
            fontWeight: "bold",
            fontSize: "0.9rem",
            color: "white",
            textTransform: "capitalize"
          }}
        >
          {user?.name || "Loading..."}
        </Typography>
      </IconButton>

      <Menu
  id="profile-menu"
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleClose}
  placement="bottom-end"
  sx={{
    minWidth: "140px",
    zIndex: 1300,
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    borderRadius: "8px"
  }}
>
  <MenuItem onClick={handleLogout}>Logout</MenuItem>
</Menu>

    </Box>
  );
}
