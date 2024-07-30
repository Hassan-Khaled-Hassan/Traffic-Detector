import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import HeadersUA from "../../../component/Utilities/HeadersU-A";
import MyForms from "../../../component/AdminForms/MyForms";

const FormPage = ({ open }) => {
  const drawerWidth = 240;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box
      width={`${
        open
          ? screenWidth > 600
            ? `calc(100% - ${drawerWidth}px)`
            : "100%"
          : "100%"
      }`}
      component={"main"}
      sx={{
        display: "block",
        ml: screenWidth < 600 ? "auto" : open ? `${drawerWidth}px` : 0,
        mt: "95px",
      }}
    >
      <HeadersUA
        screenWidth={screenWidth}
        open={open}
        head="CREATE USER"
        text="Create a New User Profile"
        isbtn={false}
      />
      <MyForms screenWidth={screenWidth} open={open} />
    </Box>
  );
};

export default FormPage;
