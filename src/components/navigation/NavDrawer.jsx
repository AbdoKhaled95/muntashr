import { Divider, List, ListItem, Drawer, IconButton } from "@mui/material";
import React from "react";
import NavBarLink from "../common/links/NavBarLink";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = "260px";
const NavDrawer = ({
  trigger,
  isDrawerOpened,
  pages,
  setIsDrawerOpened,
  currentPathname,
}) => {
  const anchor = "left";
  return (
    <>
      <Drawer
        // variant="persistent"
        onClose={() => setIsDrawerOpened(false)}
        open={isDrawerOpened}
        sx={{
          display: { xs: "block", md: "none" },

          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            // top: navHeight,
            bgcolor: !trigger && "transparent",
          },
        }}
        anchor={anchor}
      >
        <Divider />
        <List>
          <IconButton
            onClick={() => setIsDrawerOpened(!isDrawerOpened)}
            sx={{
              display: { xs: "flex", md: "none" },
              my: 2,
              mx: 2,
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
            {isDrawerOpened && <CloseIcon fontSize="large" />}
          </IconButton>
          {pages.map((page, index) => (
            <ListItem key={index}>
              <NavBarLink
                to={page.to}
                title={page.title}
                end={page.end}
                trigger={trigger}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavDrawer;
