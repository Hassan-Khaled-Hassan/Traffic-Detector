/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { ToastContainer } from "react-toastify";
import UseSubscribePlanHook from "./UseSubscribePlanHook";
import { useParams } from "react-router-dom";
const AllSubscriptionPlan = ({ open, screenWidth, mode }) => {
    const { id } = useParams();
  const [Items] = UseSubscribePlanHook(id);
  console.log(Items);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.4 },
    {
      field: "subscribeId",
      headerName: "Subscribe ID",
      flex: screenWidth > 600 ? 0.7 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: screenWidth > 600 ? 0.5 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
    },
    {
      field: "planId",
      headerName: "Plan ID",
      flex: screenWidth > 600 ? 0.5 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
    },
    {
      field: "name",
      headerName: "Name",
      flex: screenWidth > 600 ? 0.5 : "auto",
      width: screenWidth > 600 ? "auto" : 200,
      cellClassName: "name-column--cell",
    },
    {
      field: "StartDate",
      headerName: "Start Date",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
    },
    {
      field: "EndDate",
      headerName: "End Date",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
    },
    {
      field: "price",
      headerName: "Price",
      flex: screenWidth > 600 ? 0.5 : "auto",
      width: screenWidth > 600 ? "auto" : 250,
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
          rows={Items}
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

export default AllSubscriptionPlan;
