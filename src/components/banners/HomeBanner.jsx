import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import homeBannerImg from "../../assets/images/banner-main.jpg";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import MainButton from "../common/buttons/MainButton";

const HomeBanner = () => {
  console.log();
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "600px",
        height: `100vh`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Box
        component={"img"}
        src={homeBannerImg}
        sx={{
          position: "absolute",
          zIndex: -1,
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />

      <Typography
        variant="h1"
        sx={{ fontSize: { md: 76 }, color: "background.paper" }}
      >
        Engage Business
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: 16, md: 24 },
          width: { xs: 350, sm: 500, md: 700 },
          textAlign: "center",
          color: "background.paper",
        }}
      >
        Our small and medium business solutions helped grow over hundred of
        companies. It's time for your firm to shine.
      </Typography>

      <Stack direction={"row"} spacing={2}>
        <MainButton btnText="Learn More" />
        <MainButton
          variant="outlined"
          btnText="Our Services"
          bgcolor="background.paper"
          color="text.primary"
          sx={{
            border: "none",
            ":hover": {
              border: "none",
              bgcolor: "background.paper",
              opacity: ".7",
            },
          }}
        />
      </Stack>
      <IconButton sx={{ color: "background.paper", my: 6 }}>
        <ArrowCircleDownIcon sx={{ fontSize: 56 }} />
      </IconButton>
    </Box>
  );
};

export default HomeBanner;
