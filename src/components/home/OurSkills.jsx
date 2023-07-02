import { Box } from "@mui/material";
import React from "react";
import MainContainer from "../common/containers/MainContainer";
import Grid02 from "../common/grids/Grid02";
import SkillProgress from "../common/progress/SkillProgress";

const OurSkills = () => {
  const progress = [
    { title: "Development", percentage: 90 },
    { title: "Design", percentage: 86 },
    { title: "Marketing", percentage: 78 },
    { title: "Webdev", percentage: 72 },
  ];
  return (
    <Box>
      <MainContainer>
        <Grid02
          // flexDirection="row-reverse"
          title="Our Skills"
          caption="Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo leo velit sit amet velit. Aliquam fermentum, lorem quis posuere mattis, est justo porttitor magna, in commodo risus justo vitae nibh. Sed mollis sapien erat, id pellentesque libero interdum at. Mauris sodales felis luctus purus hendreri. Vivamus baram sapien era."
        >
          {progress.map((item, i) => (
            <SkillProgress
              key={i}
              skillTitle={item.title}
              skillPercentage={item.percentage}
            />
          ))}
        </Grid02>
      </MainContainer>
    </Box>
  );
};

export default OurSkills;
