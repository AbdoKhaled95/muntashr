import { Button } from "@mui/material";
import React from "react";

const MainButton = (props) => {
  const {
    sx: sxProp = {},
    color,
    bgcolor,
    variant = "contained",
    btnText,
    ...rest
  } = props;
  const sx = {
    transition: "all 0.3s",
    fontWeight: 700,
    fontSize: { md: 16 },
    width: { xs: 140, md: 160, lg: 200 },
    height: { xs: 55, md: 60, lg: 70 },
    bgcolor: bgcolor,
    color: color,
    ...sxProp,
  };

  return (
    <Button {...rest} variant={variant} sx={sx}>
      {btnText}
    </Button>
  );
};

export default MainButton;
