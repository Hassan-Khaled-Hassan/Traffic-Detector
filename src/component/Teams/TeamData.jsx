import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import UseTeamsFunc from "./UseTeamsFunc";
import { ToastContainer } from "react-toastify";

// eslint-disable-next-line react/prop-types
export default function TeamData({ open, screenWidth }) {
  const theme = useTheme();
  const [newItems] = UseTeamsFunc();
  //  console.log(newItems);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 110,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "registrarId",
      headerName: "Registrar ID",
      flex: screenWidth > 600 ? 0.5 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
    },
    {
      field: "name",
      headerName: "name",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 240,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 220,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="99px"
            m="0 auto"
            p="5px"
            borderRadius="3px"
            textAlign={"center"}
            display="flex"
            justifyContent="space-evenly"
            backgroundColor={theme.palette.success.dark}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlinedIcon sx={{ color: "white" }} />
            )}
            {access === "Manager" && (
              <SecurityOutlinedIcon sx={{ color: "white" }} />
            )}
            {access === "User" && <LockOpenIcon sx={{ color: "white" }} />}
            <Typography sx={{ mt: "3px", fontSize: "13px", color: "white" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
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
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          // checkboxSelection
          align="center"
        />
      </Box>
      <ToastContainer/>
    </Box>
  );
}
