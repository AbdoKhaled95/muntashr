import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

const Card0 = ({ Icon, title, caption }) => {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          width: { xs: 235 },
          height: { xs: 290 },
          // boxShadow: 0,
          border: 0,
        }}
      >
        <Stack gap={2} alignItems={"center"}>
          <Box
            sx={{
              width: { xs: 88 },
              height: { xs: 88 },
              borderRadius: "50%",
              bgcolor: "primary.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon sx={{ fontSize: 36, color: "background.paper" }} />
          </Box>
          <Typography variant="h4" sx={{ fontSize: 17 }}>
            {title}
          </Typography>
          <Typography
            variant="caption"
            sx={{ textAlign: "center", fontSize: 15, color: "text.secondary" }}
          >
            {caption}
          </Typography>
        </Stack>
      </Card>
    </>
  );
};

export default Card0;
