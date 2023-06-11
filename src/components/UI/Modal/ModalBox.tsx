import { Box } from "@mui/material";
import React from "react";

interface ModalBoxProps {
  children: React.ReactNode;
}

const ModalBox = ({ children }: ModalBoxProps) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "500px",
        width: "95%",
        bgcolor: "#fff",
        p: "1.25rem 1rem",
        borderRadius: 1,
        zIndex: 20,
      }}
    >
      {children}
    </Box>
  );
};

export default ModalBox;
