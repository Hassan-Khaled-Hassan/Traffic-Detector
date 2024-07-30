import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import HeadersUA from '../../../component/Utilities/HeadersU-A';
import AllMyRoads from '../../../component/Roads/GetAllRods/AllMyRoads';

const AllRoadsPage = ({ open, mode }) => {
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
        head="Our Roads"
        text="List of All Roads in Our Systems"
        isbtn={false}
      />
      <AllMyRoads open={open} screenWidth={screenWidth} mode={mode} />
    </Box>
  );
};

export default AllRoadsPage