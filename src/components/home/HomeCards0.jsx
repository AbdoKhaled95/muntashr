import React from "react";
import Card0 from "../common/cards/Card0";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import { Box } from "@mui/material";
import MainContainer from "../common/containers/MainContainer";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PagesIcon from "@mui/icons-material/Pages";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const HomeCards0 = () => {
  const cards = [
    {
      icon: DisplaySettingsIcon,
      title: "Powerful Options",
      caption:
        "Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo.",
    },
    {
      icon: DesignServicesIcon,
      title: "Responsive Design",
      caption:
        "Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo.",
    },
    {
      icon: PagesIcon,
      title: "Page Builder",
      caption:
        "Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo.",
    },
    {
      icon: FavoriteBorderIcon,
      title: "Satisfied Clients",
      caption:
        "Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo.",
    },
  ];
  return (
    <>
      <Box>
        <MainContainer>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: { xs: 2, md: 4, lg: 6, xl: 12 },
              flexWrap: "wrap",
            }}
          >
            {cards.map((card, index) => (
              <Card0
                key={index}
                Icon={card?.icon}
                caption={card?.caption}
                title={card?.title}
              />
            ))}
          </Box>
        </MainContainer>
      </Box>
    </>
  );
};

export default HomeCards0;
