import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navigation/NavBar";
import { useMainThemeContext } from "../../contexts/MainThemeContext";
import ButtonToTop from "../common/buttons/ButtonToTop";

export const MainLayout = () => {
  const { navHeight } = useMainThemeContext();
  return (
    <>
      <NavBar />
      <Box component={"main"} sx={{ py: `${navHeight}px` }}>
        <Outlet />
        <ButtonToTop />
      </Box>
    </>
  );
};
