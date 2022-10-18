import React from "react";
import Container from "@mui/material/Container";

const Layout = ({ children }) => {
  return (
    <Container
      maxWidth="md"
      sx={{ display: "flex", flexDirection: "column", gap: 5, mt: 10 }}
    >
      {children}
    </Container>
  );
};

export default Layout;
