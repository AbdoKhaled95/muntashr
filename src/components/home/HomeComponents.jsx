import { Box } from "@mui/material";
import React from "react";

import HomeCards0 from "./HomeCards0";
import WhoWeAre from "./WhoWeAre";
import OurSkills from "./OurSkills";
import HomeBanner from "../banners/HomeBanner";

const HomeComponents = () => {
  return (
    <Box component={"section"}>
      <HomeBanner />
      <HomeCards0 />
      <WhoWeAre />
      <OurSkills />
    </Box>
  );
};

export default HomeComponents;
