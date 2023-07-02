import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import body1Style from "../../../assets/styles/body1Style";

const Grid01 = ({ src, title, caption, flexDirection, items }) => {
  return (
    <Grid
      container
      gap={12}
      alignItems={"center"}
      flexDirection={flexDirection}
      sx={{ justifyContent: { xs: "center", lg: "flex-start" } }}
    >
      <Grid item xs={10} lg={5}>
        <Box
          component={"img"}
          alt=""
          sx={{
            width: "100%",
            height: { xs: "317", sm: "420px", md: "485px" },
            objectFit: "cover",
          }}
          src={src}
        />
      </Grid>
      <Grid item xs={10} lg={5}>
        <Stack spacing={2}>
          <Typography variant="h3" sx={{ fontSize: { md: 22, lg: 28 } }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={body1Style}>
            {caption}
          </Typography>
          {items && (
            <Stack spacing={2}>
              {items.map((item, i) => (
                <Box key={i}>
                  <Box component={"img"} src={item.icon} />
                  <Typography variant="body1" sx={body1Style}>
                    {item.caption}
                  </Typography>
                </Box>
              ))}
            </Stack>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};
export default Grid01;
