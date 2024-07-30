import { Box } from '@mui/material';
import  { useEffect, useState } from 'react'
import HeadersUA from '../../../component/Utilities/HeadersU-A';
import MyPricing from '../../../component/Pricing/Admin/MyPricing';

// eslint-disable-next-line react/prop-types
const AllPlansPage = ({ open }) => {
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
        head="Our Plans"
        text="Quickly build an effective pricing table for your potential customers
        with this layout."
        isbtn={false}
      />
      <MyPricing screenWidth={screenWidth} open={open} />
    </Box>
  );
};

export default AllPlansPage;