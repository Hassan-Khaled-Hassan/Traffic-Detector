import { Email, Group, Map, Paid, Videocam } from '@mui/icons-material';
import { Stack, useTheme } from '@mui/material';
import React from 'react'
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import TrafficIcon from "@mui/icons-material/Traffic";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import MyCard from './MyCard';
import UseFirstRowHook from './UseFirstRowHook';
const MyFirstRow = ({ mode }) => {
  const theme = useTheme();
  const [percentages, totalUsers, totalRoads, totalCams, totalForecasts] =
    UseFirstRowHook();
  console.log(percentages);
  return (
    <Stack
      direction="row"
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <MyCard
        icon={
          <Group
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={totalUsers}
        subTitle={"All Users"}
        data={percentages}
        scheme={"accent"}
        mode={mode}
      />
      <MyCard
        icon={
          <Map sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />
        }
        title={totalRoads}
        subTitle={"All Roads"}
        //data={percentages}
        scheme={"category10"}
        mode={mode}
      />
      <MyCard
        icon={
          <Videocam
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={totalCams}
        subTitle={"All Cameras"}
        //data={percentages}
        scheme={"dark2"}
        mode={mode}
      />
      <MyCard
        icon={
          <Paid
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={totalForecasts}
        subTitle={"All Forecasting"}
        //data={percentages}
        scheme={"paired"}
        mode={mode}
      />
    </Stack>
  );
};

export default MyFirstRow