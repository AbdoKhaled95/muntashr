import { Link, useTheme } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLink = ({ to, title, end, trigger, currentPathname }) => {
  const primaryMainColor = useTheme()?.palette?.primary?.main;

  return (
    <Link
      component={NavLink}
      to={to}
      end={end}
      sx={{
        transition: "all .3s",
        fontSize: { xs: 16, md: 18 },
        // color: "text.primary",
        color: trigger || currentPathname ? "text.primary" : "background.paper",
        textDecoration: "none",
        "&:hover": {
          color: "primary.main",
        },
      }}
      style={({ isActive }) => {
        return {
          color: isActive && primaryMainColor,
        };
      }}
    >
      {title}
    </Link>
  );
};

export default NavBarLink;
