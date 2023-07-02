import React from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useScrollTrigger } from "@mui/material";
import scrollToSection from "../../../utils/scrollToSection";

const ButtonToTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  return (
    <>
      {trigger && (
        <Fab
          component="button"
          style={{}}
          onClick={() => scrollToSection()}
          size="small"
          sx={{
            transition: "all .3s",
            position: "fixed",
            bottom: 24,
            right: 24,
            color: "background.paper",
            bgcolor: "text.secondary",
            ":hover": {
              bgcolor: "text.secondary",
              opacity: 0.7,
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </>
  );
};

export default ButtonToTop;
