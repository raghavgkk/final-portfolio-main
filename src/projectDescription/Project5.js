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
import img1 from "../assets/Raahi/1.png";
import img2 from "../assets/Raahi/2.png";
import img3 from "../assets/Raahi/3.jpg";
import img4 from "../assets/Raahi/4.png";
import img5 from "../assets/Raahi/5.png";
import img6 from "../assets/Raahi/6.png";
import img7 from "../assets/Raahi/7.png";
import img8 from "../assets/Raahi/8.png";
import img9 from "../assets/Raahi/9.png";
import img10 from "../assets/Raahi/10.png";
import img11 from "../assets/Raahi/11.png";

import logo from "../assets/icons/Logo.png";

import behance from "../assets/images/Behance.png";
import { Link } from "react-router-dom";
import "./projextDesc.css";
import InstagramIcon from "@mui/icons-material/Instagram";
const Project5 = () => {

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
        className="grid"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
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
        <div style={{ width: "100%" }} id="top">
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
                  color: "#0101F6",
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
              sx={{ color: "#0101F3" }}
            >
              Raahi - Har Safar ka Saathi
            </Typography>
            <Typography
              fontFamily={"Poppins"}
              fontWeight={500}
              fontSize={{ xs: "17px", sm: "20px" }}
              lineHeight={3}
              sx={{ color: "#0101F3" }}
            >
              <i>UX UI | Case Study | App Design</i>
            </Typography>
            <Box sx={{ flexGrow: 1, width: { xs: "90%", sm: "80%" } }}>
              <Typography
                variant="body"
                fontFamily={"Poppins"}
                fontWeight={500}
                fontSize={{ xs: "14px", sm: "14px" }}
                lineHeight={-1}
                sx={{ color: "#000000" }}
              >
                The objective of this UX case study was to recognize and tackle
                the challenges confronted by truck drivers and develop an
                application to resolve them. The project aimed to enhance the
                working conditions of truck drivers, as well as boost their
                productivity and safety levels.
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
              style={{ width: "100%",  height: "auto" }}
              src={img1}
            />

            <img
              alt="image1"
              style={{ width: "100%",  height: "auto" }}
              src={img2}
            />

            <img
              id="research"
              alt="image1"
              style={{ width: "100%",  height: "auto" }}
              src={img3}
            />

            <img
              alt="image1"
              style={{ width: "100%",  height: "auto" }}
              src={img4}
            />

            <img
              id="finding"
              alt="image1"
              style={{ width: "100%",  height: "auto" }}
              src={img5}
            />

            <img
              alt="image1"
              style={{ width: "100%",  height: "auto" }}
              src={img6}
            />

            <img
              alt="image1"
              style={{ width: "100%",  height: "auto" }}
              src={img7}
            />

            <img
              alt="image1"
              style={{ width: "100%",  height: "auto" }}
              src={img8}
            />

            <img
              alt="image1"
              style={{ width: "100%",  height: "auto" }}
              src={img9}
            />

            <img
              id="interface"
              alt="image1"
              style={{ width: "100%",  height: "auto" }}
              src={img10}
            />

            <img
              alt="image1"
              style={{ width: "100%",  height: "auto" }}
              src={img11}
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
              fontSize={{ xs: "10px", sm: "12px", paddingTop: "10px" }}
            >
              <a
                ref={topOfPageRef}
                onMouseEnter={(e) => (e.target.style.color = "#AAE800")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
                href="#top"
                style={{ color: "black", textDecoration: "none" }}
              >
                Top of Page
              </a>
            </Typography>
            <Typography
              fontFamily={"Krona One"}
              fontSize={{ xs: "10px", sm: "12px", paddingTop: "10px" }}
            >
              <a
                onMouseEnter={(e) => (e.target.style.color = "#AAE800")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
                href="#research"
                style={{ color: "black", textDecoration: "none" }}
              >
                Research{" "}
              </a>
            </Typography>
            <Typography
              fontFamily={"Krona One"}
              fontSize={{ xs: "10px", sm: "12px", paddingTop: "10px" }}
            >
              <a
                onMouseEnter={(e) => (e.target.style.color = "#AAE800")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
                href="#finding"
                style={{ color: "black", textDecoration: "none" }}
              >
                Findings{" "}
              </a>
            </Typography>
            <Typography
              fontFamily={"Krona One"}
              fontSize={{ xs: "10px", sm: "12px", paddingTop: "10px" }}
            >
              <a
                onMouseEnter={(e) => (e.target.style.color = "#AAE800")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
                href="#interface"
                style={{ color: "black", textDecoration: "none" }}
              >
                Interface{" "}
              </a>
            </Typography>
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
            fontSize={"20.5px"}
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
            fontSize={"10.5px"}
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

export default Project5;
