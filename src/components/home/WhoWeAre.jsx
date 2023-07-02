import { Box } from "@mui/material";
import React from "react";
import img from "../../assets/images/banner-main.jpg";
import MainContainer from "../common/containers/MainContainer";
import Grid01 from "../common/grids/Grid01";

const WhoWeAre = () => {
  return (
    <Box sx={{ bgcolor: "custom.background0" }}>
      <MainContainer>
        <Grid01
          // flexDirection="row-reverse"
          src={img}
          title="Who we are?"
          caption="We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house. We are so happy with this theme. Everyday it make our lives better."
        />
      </MainContainer>
    </Box>
  );
};

export default WhoWeAre;
