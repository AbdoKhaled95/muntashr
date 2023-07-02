import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import body1Style from "../../../assets/styles/body1Style";

const Grid02 = ({ title, caption, flexDirection, children }) => {
  return (
    <Grid
      container
      gap={12}
      alignItems={"center"}
      flexDirection={flexDirection}
      sx={{ justifyContent: { xs: "center", lg: "flex-start" } }}
    >
      <Grid item xs={10} lg={5}>
        <Stack spacing={2}>
          <Typography variant="h3" sx={{ fontSize: { md: 22, lg: 28 } }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={body1Style}>
            {caption}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={10} lg={5}>
        <Stack spacing={2}>{children}</Stack>
      </Grid>
    </Grid>
  );
};

export default Grid02;
