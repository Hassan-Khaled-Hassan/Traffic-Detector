/* eslint-disable react/prop-types */
import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import UseAllRoadsFunc from "./UseAllRoadsFunc";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Link } from "react-router-dom";
import OurDialog from "./Dialog/OurDialog";
const AllMyRoads = ({ open, screenWidth, mode }) => {
  const [loading, newItems, handleClick, setRoadID, RoadID] = UseAllRoadsFunc();
  const [DialogMe, setDialogMe] = useState(false);
  const [RoadName, setRoadName] = useState("");
  const [RoadSTpoint, setRoadSTpoint] = useState("");
  const [RoadEndpoint, setRoadEndpoint] = useState("");

   //console.log(RoadSTpoint);
  const handleClose = () => {
    setDialogMe(false);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.4 },
    {
      field: "registrarId",
      headerName: "Registrar ID",
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
              to={`/admin-dashboard/All-roads/${registrarId}`}
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
      field: "name",
      headerName: "Name",
      flex: screenWidth > 600 ? 0.7 : "auto",
      width: screenWidth > 600 ? "auto" : 200,
      cellClassName: "name-column--cell",
    },
    {
      field: "address",
      headerName: "Address",
      flex: screenWidth > 600 ? 0.8 : "auto",
      width: screenWidth > 600 ? "auto" : 250,
    },
    {
      field: "StartPoint",
      headerName: "Start Point",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
    },
    {
      field: "EndPoint",
      headerName: "End Point",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
    },
    {
      field: "access",
      headerName: "access",
      flex: screenWidth > 600 ? 0.8 : "auto",
      width: screenWidth > 600 ? "auto" : 220,
      align: "center",
      headerAlign: "center",
      margin: "auto",
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
    {
      field: "cameraDetails",
      headerName: "Cam_Details",
      flex: screenWidth > 600 ? (screenWidth < 900 ? 0.5 : 1) : "auto",
      width: screenWidth > 600 ? "auto" : 150,
      align: "center",
      headerAlign: "center",
      // eslint-disable-next-line no-unused-vars
      renderCell: ({
        row: { cameraDetails, registrarId, name, StartPoint, EndPoint },
      }) => {
        return (
          <Box
            width="160px"
            m="8px auto"
            p="5px"
            borderRadius="3px"
            textAlign={"center"}
            display="flex"
            justifyContent="space-evenly"
            backgroundColor="#5a3b89"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setRoadID(registrarId);
              setRoadSTpoint(StartPoint);
              setRoadEndpoint(EndPoint);
              // handleClick(registrarId);
              setRoadName(name);
              setDialogMe(!DialogMe);
            }}
          >
            {cameraDetails !== "" && <CameraAltIcon sx={{ color: "white" }} />}
            {screenWidth > 600 && screenWidth < 900 ? null : (
              <Typography sx={{ mt: "3px", fontSize: "13px", color: "white" }}>
                {cameraDetails}
              </Typography>
            )}
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
      <OurDialog
        DialogMe={DialogMe}
        RoadName={RoadName}
        handleClose={handleClose}
        mode={mode}
        screenWidth={screenWidth}
        RoadID={RoadID}
        RoadSTpoint={RoadSTpoint}
        RoadEndpoint={RoadEndpoint}
      />
    </Box>
  );
};

export default AllMyRoads;
