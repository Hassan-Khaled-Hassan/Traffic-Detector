import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import UseALLhook from "./UseALLhook";
import { useTheme } from "@emotion/react";

const AdminAllForecasts = ({ open, screenWidth, mode }) => {
  const [items] = UseALLhook();
    const theme = useTheme();
  const columns = [
    { field: "id", headerName: "ID", flex: 0.4 },
    {
      field: "forecastId",
      headerName: "Forecast ID",
      flex: screenWidth > 600 ? 0.7 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
    },
    {
      field: "roadId",
      headerName: "Road ID",
      flex: screenWidth > 600 ? 0.5 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
    },
    {
      field: "date",
      headerName: "Date",
      flex: screenWidth > 600 ? 0.5 : "auto",
      width: screenWidth > 600 ? "auto" : 200,
      cellClassName: "name-column--cell",
    },
    {
      field: "numOfCars",
      headerName: "Number of Cars",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
      align: "center",
      headerAlign: "center",

      renderCell: ({ row: { numOfCars } }) => {
        return (
          <Box
            width="99px"
            m="10px auto"
            p="5px"
            borderRadius="3px"
            textAlign={"center"}
            display="flex"
            justifyContent="space-evenly"
            backgroundColor="#5a3b89"
          >
            <Typography sx={{ mt: "3px", fontSize: "13px", color: "white" }}>
              {numOfCars}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "trafficFlow",
      headerName: "Traffic Flow",
      flex: screenWidth > 600 ? 0.5 : "auto",
      width: screenWidth > 600 ? "auto" : 250,
      align: "center",
      headerAlign: "center",

      renderCell: ({ row: { trafficFlow } }) => {
        return (
          <Box
            width="99px"
            m="10px auto"
            p="5px"
            borderRadius="3px"
            textAlign={"center"}
            display="flex"
            justifyContent="space-evenly"
            backgroundColor={theme.palette.success.dark}
          >
            <Typography sx={{ mt: "3px", fontSize: "13px", color: "white" }}>
              {trafficFlow}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 625 }}>
      <Box
        sx={{
          flexGrow: 1,
          height: 596,
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
        <DataGrid
          rows={items}
          columns={columns}
          gap={"5"}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 15 },
            },
          }}
          pageSizeOptions={[15, 30, 100]}
          // checkboxSelection
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default AdminAllForecasts;
