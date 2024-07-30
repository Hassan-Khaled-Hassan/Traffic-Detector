import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeadersUA from "../../../component/Utilities/HeadersU-A";
import MyContact from "../../../component/Contacts/MyContact";
const ContactsPage = ({ open }) => {
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
        head="CONTACTS"
        text="List of Contacts for Future Reference"
        isbtn={false}
      />
      <MyContact open={open} screenWidth={screenWidth} />
    </Box>
  );
};

export default ContactsPage;
