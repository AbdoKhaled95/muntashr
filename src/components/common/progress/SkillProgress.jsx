import React from "react";
import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const SkillProgress = ({ skillTitle, skillPercentage }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(skillPercentage);
    }, 600);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
            fontSize: 15,
          }}
        >
          {skillTitle}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", fontSize: 15 }}
        >
          {skillPercentage}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ height: 6 }}
      />
    </Stack>
  );
};

export default SkillProgress;
