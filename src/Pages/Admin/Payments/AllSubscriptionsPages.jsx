/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import  { useEffect, useState } from "react";
import HeadersUA from "../../../component/Utilities/HeadersU-A";
import AllMySubscription from "../../../component/Subscriptions/All Subscriptions/AllMySubscription";

const AllSubscriptionsPages = ({ open, mode }) => {
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
        head="Our Subscriptions"
        text="List of All Subscriptions in Our Systems"
        isbtn={false}
      />
      <AllMySubscription open={open} screenWidth={screenWidth} mode={mode} />
    </Box>
  );
};

export default AllSubscriptionsPages;
