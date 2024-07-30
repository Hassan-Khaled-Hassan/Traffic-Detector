import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeadersUA from "../../../component/Utilities/HeadersU-A";
import MyOneCam from "../../../component/Cameras/GetOneCamera/MyOneCam";

const GetOneMapPage = ({ open }) => {
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
        head="Update Camera"
        text="Update a selected Camera on a selected Road to check forecast"
        isbtn={false}
      />
      <MyOneCam screenWidth={screenWidth} open={open} />
    </Box>
  );
};

export default GetOneMapPage;
