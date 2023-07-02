import { Box } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo.svg";

const NavLogo = ({}) => {
  return (
    <Box
      sx={{
        // display: { xs: "none", md: "flex" },

        img: { height: 36 },
      }}
    >
      <Box component={"img"} src={logo} alt="" />
    </Box>
  );
};

export default NavLogo;
