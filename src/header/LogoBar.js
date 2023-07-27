import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from "@mui/material";
import video1 from "../assets/images/raghavLogo.gif";
import { Link } from "react-router-dom";

import logo from "../assets/icons/Logo png.png";
const LogoBar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        margin: "auto",
        height: "auto",
        "@media screen and (max-width: 1317px)": {
          display: "none",
        },
      }}
    >
      <AppBar position="static" sx={{ background: "black", height: "15px" }}>
        <Toolbar background="black">
          <Avatar
            width="62.75px"
            height="49.6px"
            sx={{ bgcolor: "black", paddingLeft: "5%" }}
            variant="square"
          >
            <a href="/">
              <div className="logo">
                <img src={logo} alt="GIF image" />
              </div>
              {/* <Avatar
                style={{
                  width: "88.75px",
                  height: "79.6px",
                  overflow: "hidden",
                }}
                variant="square"
              >
                <img
                  src={video1}
                  alt="gif"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Avatar> */}
            </a>
          </Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default LogoBar;
