/* eslint-disable react/prop-types */
import { EditLocationAlt, WarningAmber } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import UseOurDialogHook from "./UseOurDialogHook";
import MyCamDMap from "./MyCamDMap";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// eslint-disable-next-line react/prop-types
const OurDialog = ({
  DialogMe,
  RoadName,
  handleClose,
  mode,
  screenWidth,
  RoadID,
  RoadSTpoint,
  RoadEndpoint,
}) => {
  const [loading, itemsCams, dimensions, cameras] = UseOurDialogHook(RoadID);
  console.log(dimensions);
  console.log(loading);

  return (
    <Dialog
      open={DialogMe}
      onClose={handleClose}
      keepMounted
      TransitionComponent={Transition}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <Box sx={{ width: screenWidth >= 650 ? "550px" : "100%" }}>
        <DialogTitle id="scroll-dialog-title">
          All Cameras on
          <span style={{ color: "rgb(34 128 189)", fontSize: "1.6rem" }}>
            {" "}
            {RoadName}
          </span>{" "}
          road
        </DialogTitle>
        <DialogContent dividers={true}>
          <Box sx={{ width: "fit-content", margin: "auto" }}>
            <FadeLoader
              color="rgb(34 128 189)"
              height={18}
              margin={5}
              radius={200}
              speedMultiplier={1.2}
              width={6}
              loading={loading}
            />
          </Box>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            {cameras &&
            cameras.data &&
            cameras.data.AllCameras &&
            itemsCams &&
            itemsCams.length > 0 ? (
              itemsCams.map((item, index) => {
                return (
                  <Paper
                    key={index}
                    sx={{
                      flexGrow: 1,
                      p: 1.5,
                      display: "flex",
                      justifyContent: "space-between",
                      background:
                        mode === "dark"
                          ? "linear-gradient(90deg,#1F3A5F 40%, #4d648d 100%)"
                          : "linear-gradient(90deg,#135d8f 40%, #6598d3  100%)", //#4d648d   #005B99 #4e88ca 135d8f
                      mb: "10px",
                      width: screenWidth >= 650 ? "100%" : "100%",
                    }}
                  >
                    <Stack direction="column" gap={1} sx={{ width: "100%" }}>
                      <Stack
                        direction="row"
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Typography
                          variant="body1"
                          sx={{ display: "flex", color: "#dad7d7" }}
                        >
                          Model :{" "}
                          <Typography
                            variant="body1"
                            sx={{
                              mx: "5px",
                              textTransform: "capitalize",
                              color: "white",
                            }}
                          >
                            {" "}
                            {item.cameraDetails.model}
                          </Typography>
                        </Typography>
                        <Link
                          to={`/admin-dashboard/All-Cameras/${item.cameraDetails.id}`}
                        >
                          <Typography variant="body1" sx={{ color: "white" }}>
                            <EditLocationAlt />
                          </Typography>
                        </Link>
                      </Stack>
                      <Stack
                        direction={screenWidth >= 650 ? "row" : "column"}
                        justifyContent={"space-between"}
                      >
                        <Typography
                          variant="body1"
                          sx={{ display: "flex", color: "#dad7d7" }}
                        >
                          Factory :{" "}
                          <Typography
                            variant="body1"
                            sx={{
                              mx: "5px",
                              textTransform: "capitalize",
                              color: "white",
                            }}
                          >
                            {" "}
                            {item.cameraDetails.factory}
                          </Typography>
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ display: "flex", color: "#dad7d7" }}
                        >
                          Active :{" "}
                          <Typography
                            variant="body1"
                            sx={{
                              mx: "5px",
                              textTransform: "capitalize",
                              color: "#dc1df1",
                            }}
                          >
                            {" "}
                            {item.roadCam.active.toString()}
                          </Typography>
                        </Typography>
                      </Stack>
                      <Stack
                        direction={screenWidth >= 650 ? "row" : "column"}
                        justifyContent={"space-between"}
                      >
                        <Typography
                          variant="body1"
                          sx={{ display: "flex", color: "#dad7d7" }}
                        >
                          Dimensions :{" "}
                          <Typography
                            variant="body1"
                            sx={{
                              mx: "5px",
                              textTransform: "capitalize",
                              color: "white",
                            }}
                          >
                            {" "}
                            {item.roadCam.dimensions
                              ? item.roadCam.dimensions.split(" ")[0]
                              : null}
                          </Typography>
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ display: "flex", color: "#dad7d7" }}
                        >
                          Start Service :{" "}
                          <Typography
                            variant="body1"
                            sx={{
                              mx: "5px",
                              textTransform: "capitalize",
                              color: "#dc1df1",
                            }}
                          >
                            {" "}
                            {item.cameraDetails.start_service}
                          </Typography>
                        </Typography>
                      </Stack>
                    </Stack>
                  </Paper>
                );
              })
            ) : cameras &&
              cameras.data &&
              cameras.data.Cameras &&
              cameras.data.Road_Cams &&
              itemsCams &&
              itemsCams.length > 0 ? (
              itemsCams.map((item, index) => {
                console.log(item);
                return (
                  <Paper
                    key={index}
                    sx={{
                      flexGrow: 1,
                      p: 1.5,
                      display: "flex",
                      justifyContent: "space-between",
                      background:
                        mode === "dark"
                          ? "linear-gradient(90deg,#1F3A5F 40%, #4d648d 100%)"
                          : "linear-gradient(90deg,#135d8f 40%, #6598d3  100%)", //#4d648d   #005B99 #4e88ca 135d8f
                      mb: "10px",
                      width: screenWidth >= 650 ? "100%" : "100%",
                    }}
                  >
                    <Stack direction="column" gap={1} sx={{ width: "100%" }}>
                      <Stack
                        direction="row"
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Typography
                          variant="body1"
                          sx={{ display: "flex", color: "#dad7d7" }}
                        >
                          Model :{" "}
                          <Typography
                            variant="body1"
                            sx={{
                              mx: "5px",
                              textTransform: "capitalize",
                              color: "white",
                            }}
                          >
                            {" "}
                            {item.Cameras.model}
                          </Typography>
                        </Typography>
                        <Link
                          to={`/admin-dashboard/All-Cameras/${item.Cameras.id}`}
                        >
                          <Typography variant="body1" sx={{ color: "white" }}>
                            <EditLocationAlt />
                          </Typography>
                        </Link>
                      </Stack>
                      <Stack
                        direction={screenWidth >= 650 ? "row" : "column"}
                        justifyContent={"space-between"}
                      >
                        <Typography
                          variant="body1"
                          sx={{ display: "flex", color: "#dad7d7" }}
                        >
                          Factory :{" "}
                          <Typography
                            variant="body1"
                            sx={{
                              mx: "5px",
                              textTransform: "capitalize",
                              color: "white",
                            }}
                          >
                            {" "}
                            {item.Cameras.factory}
                          </Typography>
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ display: "flex", color: "#dad7d7" }}
                        >
                          Active :{" "}
                          <Typography
                            variant="body1"
                            sx={{
                              mx: "5px",
                              textTransform: "capitalize",
                              color: "#dc1df1",
                            }}
                          >
                            {" "}
                            {item.Road_Cams.active.toString()}
                          </Typography>
                        </Typography>
                      </Stack>
                      <Stack
                        direction={screenWidth >= 650 ? "row" : "column"}
                        justifyContent={"space-between"}
                      >
                        <Typography
                          variant="body1"
                          sx={{ display: "flex", color: "#dad7d7" }}
                        >
                          Dimensions :{" "}
                          <Typography
                            variant="body1"
                            sx={{
                              mx: "5px",
                              textTransform: "capitalize",
                              color: "white",
                            }}
                          >
                            {" "}
                            {item.Road_Cams.dimensions
                              ? item.Road_Cams.dimensions.split(" ")[0]
                              : null}
                          </Typography>
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ display: "flex", color: "#dad7d7" }}
                        >
                          Start Service :{" "}
                          <Typography
                            variant="body1"
                            sx={{
                              mx: "5px",
                              textTransform: "capitalize",
                              color: "#dc1df1",
                            }}
                          >
                            {" "}
                            {item.Cameras.start_service}
                          </Typography>
                        </Typography>
                      </Stack>
                    </Stack>
                  </Paper>
                );
              })
            ) :  loading === false ? (
              <Box sx={{ width: "100%", margin: "auto", textAlign: "center" }}>
                <WarningAmber sx={{ fontSize: "75px", color: "error.dark" }} />
                <Typography sx={{ fontSize: "25px", color: "white" }}>
                  There are no Cameras on this road
                </Typography>{" "}
              </Box>
            ) : null}
            {itemsCams && itemsCams.length > 0 ? (
              <MyCamDMap
                RoadSTpoint={RoadSTpoint}
                RoadEndpoint={RoadEndpoint}
                dimensions={dimensions}
              />
            ) : null}
          </DialogContentText>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default OurDialog;
