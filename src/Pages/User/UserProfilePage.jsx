import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import UserProfile from "../../component/UserDashboard/UserProfile";
import UserChangePass from "../../component/UserDashboard/ChangePass/UserChangePass";
import HeadersUA from "../../component/Utilities/HeadersU-A";

// eslint-disable-next-line react/prop-types
const UserProfilePage = ({ open, mode }) => {
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
        head="Account Settings"
        text="List of All Roads in Our Systems"
        isbtn={false}
      />
      <UserProfile open={open} screenWidth={screenWidth} mode={mode} />
      <Container
        sx={{
          py: { xs: 2, sm: 2 },
          borderTop: "1px solid",
          borderColor: "divider", // Add border top
          mt: "auto",
          mr: open ? (screenWidth > 600 ? "45px" : "auto") : "auto", // Push footer to bottom of the page
        }}
        width={`${
          open
            ? screenWidth > 600
              ? `calc(100% - ${drawerWidth}px)`
              : "100%"
            : "100%"
        }`}
      ></Container>
      <UserChangePass open={open} screenWidth={screenWidth} mode={mode} />
    </Box>
  );
};

export default UserProfilePage;
