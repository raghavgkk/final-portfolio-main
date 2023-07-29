import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../assets/icons/Menu.png";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import ProjectItemData from "./ProjectItemData";
import { Box, Typography } from "@mui/material";
import LogoBar from "../header/LogoBar";
import HeaderBar from "../header/HeaderBar";
import WorkMenu from "../components/navSubParts";
import Up from "../assets/icons/Up.png";
import Close from "../assets/icons/Close.png";
import SouthEastIcon from "../assets/icons/workArrow.png";

import image1 from "../assets/images/first.png";
import image2 from "../assets/images/second.png";
import image3 from "../assets/images/third.png";
import image4 from "../assets/images/video4.gif";
import image6 from "../assets/images/video6.gif";
import image5 from "../assets/images/fifth.png";
import ProjectItemForVideo from "./ProjectItemForVideo";
import "../MainPage.css";

const ProjectPage = () => {
  const topRef = useRef(null);

  // for scrolling to the top in mobile view
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const images = [
    {
      imageUrl: image1,
      title: "Vetic",
      description: "UX UI | Branding | System design",
      routerLink: "/project/vetic",
    },
    {
      imageUrl: image2,
      title: "CURA - Microsoft DC'22",
      description: "UI UX | Case Study",
      routerLink: "/project/cura",
    },
    {
      imageUrl: image3,
      title: "Paws&Wings",
      description: "UX UI | Branding | System design",
      routerLink: "/project/paws&wings",
    },
  ];

  return (
    <Box height={"100%"} width={"100%"} background="black" margin={"0px"} ref={topRef}>
      <HeaderBar />
      <LogoBar />

        <div className="ham">
          {/* for up arrow */}
          <IconButton
            className="go-to-the-top"
            onClick={scrollToTop}
            disableRipple
            style={{
              position: "fixed",
              bottom: "110px",
              right: "20px",
            }}
          >
            <img src={Up} style={{ color: "white" }} />
          </IconButton>
        </div>
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        maxHeight={"100%"}
        maxWidth={1260}
        margin="auto"
        justifyContent="center"
        alignItems="center"
      // padding="20px" // Add padding between the cards
      >
        {images.map((item, index) => (
          <ProjectItemData
            key={index} // Add key prop to the mapped elements
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            routerLink={item.routerLink}
          // target="_blank"
          />
        ))}
        <ProjectItemForVideo
          imageUrl={image4}
          title={"Looks Salon"}
          description={"Social Media | Visual Design"}
          routerLink={"/project/looks"}
        // target="_blank"
        />
        <ProjectItemData
          imageUrl={image5}
          title={"Raahi"}
          description={"UI UX | Case Study"}
          routerLink={"/project/raahi"}
        // target="_blank"
        />
        <ProjectItemForVideo
          imageUrl={image6}
          title={"NID Portfolio"}
          description={"All India Rank 3 | Graphic Design 2023 "}
          routerLink={
            "https://www.canva.com/design/DAFeIm1fSjc/xjWB03OYWrMj1YrwVDF0JA/view"
          }
          target="_blank"
        />
      </Box>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          marginTop="2%"
          marginBottom={2}
          fontFamily={"Work Sans"}
          color="white"
        >
          Made with ❣️ by <b>Raghav Sharma</b>
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectPage;