import React, { useState } from "react";
import AboutGrid from "./AboutGrid";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoBar from "../header/LogoBar";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import behance from "../assets/images/Behance.png";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
// import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import WorkMenu from "../components/navSubParts";
// import Up from "./Assets/icons/Up.png";
import Close from "../assets/icons/Close.png";
import MenuIcon from "../assets/icons/Menu.png";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../MainPage.css";
// import AboutGridUpdate from "../assets/images/AboutGrid"
// import AboutMeMobile from './AboutMeMobile';

const AboutMe = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleDrawer = (open) => (event) => {

  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }
  //   setIsOpen(open);

  // };

  // const list = () => (
  //   <div
  //     role="presentation"
  //     onClick={toggleDrawer(false)}
  //     onKeyDown={toggleDrawer(false)}
  //     className="drawer-content"
  //   >
  //     <Link to="/" className="drawer-link">
  //       <span className="nav-link">Home</span>
  //     </Link>

  //     <WorkMenu />

  //     <Link to="/about" className="drawer-link">
  //       <span className="nav-link">About Me</span>
  //     </Link>
  //   </div>
  // );

  return (
    <Box>
      {/* <div className="ham">
              <IconButton
                className={"hamburger-menu"}
                onClick={toggleDrawer(true)}
              >
                {isOpen ? (
                  <img
                    src={Close}
                    alt="dropdown"
                    className="close-icon"
                    style={{ display: "block", color: "black" }}
                  />
                ) : (
                  <img
                    src={MenuIcon}
                    alt="Menu Icon"
                    style={{ color: "white", width: "90px", height: "70px" }}
                  />
                )}
              </IconButton>

              for up arrow
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
            </div> */}
      {/* <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer> */}
      <Box
        sx={{
          width: "65%",
          margin: "auto",
          marginTop: "3rem",
          "@media screen and (max-width: 1350px)": { width: "88%" },
        }}
      >
        <AppBar position="static" sx={{ background: "black" }}>
          <Toolbar>
            <Button LinkComponent={Link} to="/work">
              <ArrowBackIcon
                sx={{
                  color: "white",
                  minWidth: "35px",
                  fontSize: "50px",
                  ":hover": {
                    color: "rgba(170, 232, 0, 1)",
                  },

                  marginLeft: "-140%",
                  "@media screen and (max-width: 450px)": {
                    marginLeft: "-180%",
                    fontSize: "30px",
                  },
                }}
              />
            </Button>
            <Button LinkComponent={Link} to="/work" sx={{ marginLeft: "auto", marginRight:"2px" }}>
              <a
                onMouseEnter={(e) => (e.target.style.color = "#F600FF")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                <Typography
                  fontFamily={"poppins"}
                  fontSize="23px"
                  fontWeight={700}
                  color={"white"}
                >
                  Work{" "}
                  <SouthEastIcon
                    sx={{
                      fontSize: "24px",
                      position: "absolute",
                      paddingTop: "5px",
                    }}
                  />
                </Typography>
              </a>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <LogoBar />

      <Box
        sx={{
          marginTop: "3rem",
          width: "75%",
          height: "auto",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          "@media screen and (max-width: 850px)": {
            width: "100%",
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            marginTop: "3rem",
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flexstart",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "white",
              lineHeight: 3,
              width: "450px",
              fontSize: "20px",
              "@media screen and (max-width: 850px)": {
                fontSize: "13px",
                width: "320px",
              },
            }}
            fontFamily={"Work Sans"}
            fontWeight={600}
          >
            A BIT ABOUT ME
          </Typography>
          <Typography
            sx={{
              color: "white",
              width: "450px",
              fontSize: "25px",
              "@media screen and (max-width: 850px)": {
                fontSize: "15px",
                width: "320px",
              },
            }}
            fontFamily={"Work Sans"}
            fontWeight={200}
          >
            I am a UI/UX designer who is passionate about creating{" "}
            <b>
              {" "}
              beautiful and joyful digital experiences. Besides design, I love
              music, games and travelling.
            </b>
          </Typography>
        </Box>

        <Box
          sx={{
            width: "70%",
            height: "auto",
            padding: "10px",
            "@media screen and (max-width: 850px)": { width: "100%" },
          }}
        >
          <AboutGrid />
        </Box>
      </Box>
      <Box
        width="75%"
        margin="auto"
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          marginTop="2%"
          fontFamily={"Work Sans"}
          fontWeight={100}
          color="white"
          fontSize={"30px"}
        >
          Get <b>in Touch</b>
        </Typography>
        <Typography
          fontWeight={200}
          fontFamily={"Work Sans"}
          // fontWeight={100}
          color="white"
          fontSize={"10.5px"}
        >
          {" "}
          So that we can talk more about...
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <a href="mailto:name@email.com" target="_blank">
            <MailIcon
              LinkComponent={Link}
              to=""
              sx={{ color: "#E3E4E68C", margin: 2.5 }}
            />
          </a>{" "}
          <a href="https://www.behance.net/raghavsharma3" target="_blank">
            <img
              src={behance}
              style={{
                height: "32px",
                width: "32px",
                margin: "17px",
              }}
            ></img>
          </a>{" "}
          <a href="https://www.linkedin.com/in/-raghavsharma/" target="_blank">
            <LinkedInIcon sx={{ color: "#E3E4E68C", margin: 2.5 }} />
          </a>
        </Box>
        <Typography
          marginTop="2%"
          marginBottom="5%"
          fontSize={"11.83px"}
          fontFamily={"Work Sans"}
          color="white"
        >
          Made with ❣️ by <b>Raghav Sharma</b>
        </Typography>
      </Box>
      {/* <AboutMeMobile/> */}
    </Box>
  );
};

export default AboutMe;
