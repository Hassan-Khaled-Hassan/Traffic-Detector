import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { PacmanLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import UseAllCamsFunc from "./UseAllCamsFunc";
// eslint-disable-next-line react/prop-types
const AllMyCams = ({ open, screenWidth }) => {
    const [loading, newItems, handleClick] = UseAllCamsFunc();
    console.log(newItems);
    // =======================================================
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "registrarId",
      headerName: "Insert ID",
      flex: screenWidth > 600 ? 0.5 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
      renderCell: ({ row: { registrarId } }) => {
        return (
          <Box
            width="99px"
            m="8px auto"
            p="5px"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              console.log(registrarId);
            }}
          >
            <Link
              to={`/admin-dashboard/All-Cameras/${registrarId}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Typography>{registrarId}</Typography>
            </Link>
          </Box>
        );
      },
    },
    {
      field: "model",
      headerName: "Model",
      flex: screenWidth > 600 ? 0.8 : "auto",
      width: screenWidth > 600 ? "auto" : 200,
      cellClassName: "model-column--cell",
    },
    {
      field: "factory",
      headerName: "Factory",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 250,
    },
    {
      field: "StService",
      headerName: "Start Service",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
    },
    {
      field: "access",
      headerName: "access",
      flex: screenWidth > 600 ? 0.7 : "auto",
      width: screenWidth > 600 ? "auto" : 220,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access, registrarId } }) => {
        return (
          <Box
            width="99px"
            m="8px auto"
            p="5px"
            borderRadius="3px"
            textAlign={"center"}
            display="flex"
            justifyContent="space-evenly"
            backgroundColor="#5a3b89"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              handleClick(registrarId);
            }}
          >
            {access !== "" && <DeleteIcon sx={{ color: "white" }} />}
            <Typography sx={{ mt: "3px", fontSize: "13px", color: "white" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  // ===========================================
  return (
    <Box
      sx={{
        height: 625,
      }}
    >
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
          rows={newItems}
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
      <Dialog open={loading} aria-labelledby="responsive-dialog-title">
        <DialogContent sx={{ py: 6, px: 16 }}>
          <PacmanLoader
            // color="#36d7b7"
            color="rgb(34 128 189)"
            cssOverride={{}}
            loading
            margin={7}
            size={30}
            speedMultiplier={0.8}
          />
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </Box>
  );
};

export default AllMyCams;
