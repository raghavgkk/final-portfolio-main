import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import logoRaghav from "../assets/images/logoRaghav.gif";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import img1 from "../assets/Looks/1.png";
import img2 from "../assets/Looks/2.JPG";
import img3 from "../assets/Looks/3.png";
import img4 from "../assets/Looks/4.png";
import img5 from "../assets/Looks/1n.png";
import img6 from "../assets/Looks/2n.png";
import img7 from "../assets/Looks/3n.png";

import logo from "../assets/icons/Logo png.png";

import behance from "../assets/images/Behance.png";
import { Link } from "react-router-dom";
import "./projextDesc.css";
import InstagramIcon from "@mui/icons-material/Instagram";
const Project4 = () => {

  const topOfPageRef = useRef(null);

  useEffect(() => {
    // Scroll to top of the page when the component is mounted
    window.scrollTo(0, 0);

    // Automatically click on "Top of Page" link after a short delay (e.g., 500ms)
    const timeoutId = setTimeout(() => {
      if (topOfPageRef.current) {
        topOfPageRef.current.click();
      }
    }, 500);

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="projectDescription">
      <div
        id="top"
        className="grid"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0A0A0A",
          gap: "20px",
        }}
      >
        {/* First column */}
        <div
          className="verticalBar"
          style={{
            "@media screen and (max-width: 768px)": { display: "none" },
          }}
        >
          <div>
            <a href="/">
              <div className="logo">
                <img src={logo} alt="GIF image" />
              </div>
            </a>
          </div>
        </div>

        {/* Second column */}
        <div style={{ width: "100%" }}>
          <Box
            sx={{
              flexGrow: 1,
              width: "100%",
              margin: "auto",
              display: "block",
              "@media screen and (max-width: 768px)": {
                textAlign: "center", // Center align the icon on mobile screens
              },
              "@media screen and (min-width: 769px)": {
                textAlign: "left", // Left align the icon on desktop screens
              },
            }}
          >
            <Button LinkComponent={Link} to="/work">
              <ArrowBackIcon
                className="arrowIcon"
                sx={{
                  color: "#EE00FF",
                  paddingTop: "50px",
                  fontSize: { xs: "80px", sm: "30px" },
                }}
              />
            </Button>
          </Box>
          <Box className="ProjDesc" sx={{ flexGrow: 1, marginTop: "40px" }}>
            <Typography
              fontFamily={"Poppins"}
              fontWeight={700}
              fontSize={{ xs: "30px", sm: "34px" }}
              sx={{ color: "#EE00FF" }}
            >
              Looks Salon
            </Typography>
            <Typography
              fontFamily={"Poppins"}
              fontWeight={500}
              fontSize={{ xs: "17px", sm: "20px" }}
              lineHeight={3}
              sx={{ color: "#EE00FF" }}
            >
              <i>Social Media | Visual Design </i>
            </Typography>
            <Box sx={{ flexGrow: 1, width: { xs: "90%", sm: "80%" } }}>
              <Typography
                variant="body"
                fontFamily={"Poppins"}
                fontWeight={500}
                fontSize={{ xs: "14px", sm: "14px" }}
                lineHeight={-1}
                sx={{ color: "white" }}
              >
                The Looks Salon project is dedicated to delivering exceptional
                beauty services and styling expertise, embracing a contemporary
                salon concept with cutting-edge digital integration. As a Visual
                Designer, I enriched the brand's appeal through captivating
                social media content and compelling graphic design elements.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              flexDirection: "column",
              width: "100%",
              height: "auto",
              "@media screen and (max-width: 450px)": { width: "100%" },
            }}
          >
            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "950px", height: "auto" }}
              src={img1}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "950px", height: "auto" }}
              src={img2}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "950px", height: "auto" }}
              src={img3}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "950px", height: "auto" }}
              src={img4}
            />

            <img
              id="branding"
              alt="image1"
              style={{ width: "100%", maxWidth: "950px", height: "auto" }}
              src={img5}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "950px", height: "auto" }}
              src={img6}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "950px", height: "auto" }}
              src={img7}
            />
          </Box>
        </div>

        {/* Third column */}
        <div
          className="navigationbar"
          style={{
            "@media screen and (max-width: 768px)": { display: "none" },
          }}
        >
          <div
            style={{
              display: "flex",
              position: "sticky",
              top: 0,
              zIndex: 1000,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Typography
              fontFamily={"Krona One"}
              fontSize={{ xs: "10px", sm: "12px" }}
            >
              <a
                ref={topOfPageRef}
                href="#top"
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
                style={{ color: "white", textDecoration: "none" }}
              >
                Top of Page
              </a>
            </Typography>
            {/* <Typography fontFamily={"Krona One"} fontSize={{ xs: "10px", sm: "12px" }}><a href='#branding'  style={{color:"black" , textDecoration:"none"}}>Branding </a></Typography>
        <Typography fontFamily={"Krona One"} fontSize={{ xs: "10px", sm: "12px" }}><a href='#mockup'  style={{color:"black" , textDecoration:"none"}}>Mockups </a></Typography>
        <Typography fontFamily={"Krona One"} fontSize={{ xs: "10px", sm: "12px" }}><a href='#website'  style={{color:"black" , textDecoration:"none"}}>Website </a></Typography> */}
          </div>
        </div>
      </div>
      <div>
        <Box
          width="100%"
          margin="auto"
          marginTop={"-2%"}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          sx={{ background: "black" }}
        >
          <Typography
            marginTop="10%"
            fontFamily={"Krona One"}
            fontWeight={100}
            color="white"
            fontSize={"21px"}
          >
            Thanks for watching
          </Typography>
          <Typography
            fontWeight={200}
            marginTop="1%"
            fontFamily={"Work Sans"}
            color="white"
            fontSize={"26.5px"}
          >
            {" "}
            💖
          </Typography>

          <Typography
            marginTop="1%"
            marginBottom="2%"
            fontFamily={"Krona One"}
            fontWeight={100}
            color="#787878"
            width={"40%"}
            textAlign={"center"}
            fontSize={"9.5px"}
            sx={{ "@media screen and (max-width: 550px)": { fontSize: "6px" } }}
          >
            Calling all feedback ninjas! I need your stealthy insights to level
            up!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <a
              href="https://instagram.com/raghav._.xd?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              <InstagramIcon sx={{ color: "#E3E4E68C", margin: 3 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/-raghavsharma/"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: "#E3E4E68C", margin: 3 }} />
            </a>
            <a href="https://www.behance.net/raghavsharma3" target="_blank">
              <img
                alt="image1"
                src={behance}
                style={{
                  height: "32px",
                  width: "32px",
                  margin: "20px",
                }}
              ></img>
            </a>{" "}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Project4;
