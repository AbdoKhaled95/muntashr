import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import NavLogo from "./NavLogo";
import NavBarLink from "../common/links/NavBarLink";
import NavDrawer from "./NavDrawer";
import { useMainThemeContext } from "../../contexts/MainThemeContext";

const pages = [
  { to: "", title: "Home", end: true },
  { to: "about", title: "About", end: false },
  { to: "services", title: "Services", end: false },
  { to: "gallery", title: "Gallery", end: false },
  { to: "contact", title: "Contact", end: false },
];

const NavBar = () => {
  const { navHeight } = useMainThemeContext();

  const urlPathname = useLocation();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const currentPathname = urlPathname?.pathname?.replace("/", "");
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  useEffect(() => {
    isDrawerOpened && setIsDrawerOpened(false);
  }, [urlPathname?.pathname]);
  return (
    <>
      <AppBar
        position={trigger ? "fixed" : "absolute"}
        sx={{
          boxShadow: trigger ? "0 0 7px rgba(0,0,0,0.09)" : 0,
          height: navHeight,
          backgroundColor: trigger ? "background.paper" : "transparent",
        }}
      >
        <Container
          maxWidth="container"
          sx={{ px: { xs: "24px", md: "48px", lg: "88px" } }}
        >
          <Toolbar
            variant="dense"
            disableGutters
            sx={{
              height: navHeight,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              onClick={() => setIsDrawerOpened(!isDrawerOpened)}
              sx={{
                display: { xs: "flex", md: "none" },
                color:
                  trigger || currentPathname
                    ? "text.primary"
                    : "background.paper",
                ":hover": {
                  bgcolor: "transparent",
                  color: "primary.main",
                },
              }}
            >
              {!isDrawerOpened && <MenuIcon fontSize="large" />}
            </IconButton>
            <NavLogo />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                // justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}
            >
              {pages.map((page, i) => (
                <NavBarLink
                  key={i}
                  title={page.title}
                  to={page.to}
                  end={page.end}
                  trigger={trigger}
                  currentPathname={currentPathname}
                />
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <NavDrawer
        trigger={trigger}
        isDrawerOpened={isDrawerOpened}
        pages={pages}
        currentPathname={currentPathname}
        setIsDrawerOpened={setIsDrawerOpened}
      />
    </>
  );
};

export default NavBar;
