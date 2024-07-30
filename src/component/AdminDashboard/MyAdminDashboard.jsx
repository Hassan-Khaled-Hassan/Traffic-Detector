import { Box } from '@mui/material';
import React from 'react'
import MyFirstRow from './MyFirstRow';

const MyAdminDashboard = ({ open, screenWidth, mode }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: `${
          screenWidth < 600
            ? "95%"
            : open
            ? "calc(100% - 50px)"
            : `calc(100% - 125px)`
        }`,
        margin: "auto",
        mr: `${screenWidth < 600 ? "auto" : !open ? "30px" : "auto"}`,
      }}
    >
      <MyFirstRow mode={mode} />
    </Box>
  );
};

export default MyAdminDashboard