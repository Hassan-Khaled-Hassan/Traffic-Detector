import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import MyUserForecasts from "../../../component/ForcastForm/userForcasting/MyUserForecasts";
import HeadersUA from "../../../component/Utilities/HeadersU-A";

const UserForecastPage = ({open,mode}) => {
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
        head="Our Forecasts"
        text="List of All Forecasts in Our Systems"
        isbtn={false}
      />
      <MyUserForecasts open={open} screenWidth={screenWidth} mode={mode} />
    </Box>
  );
};

export default UserForecastPage;
