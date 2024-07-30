import { MapOutlined } from '@mui/icons-material';
import { Box, Button, Dialog, DialogContent, InputAdornment, Stack, TextField } from '@mui/material';
import React from 'react'
import MyAddMap from '../AddRoads/MyAddMap';
import { PacmanLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';
import UseUpdateRoadHook from './UseUpdateRoadHook';
import { useParams } from 'react-router-dom';
import updateMap from './MyUpdateMap';
import MyUpdatedMap from './MyUpdateMap';

const GetMyOneRoad = ({ open, screenWidth }) => {
  const { id } = useParams();
  const [
    handleSubmit,
    errors,
    register,
    loading,
    setSTPoint,
    setENDPoint,
    Address,
    onChangeAddress,
    setName,
    Part2,
    Part3,
    handleClick,
  ] = UseUpdateRoadHook(id);
  //console.log(Part2);
  //console.log(Part3);

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
        pb: "40px",
      }}
    >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        onSubmit={handleSubmit((data) => {
          handleClick(data);
        })}
        noValidate
        autoComplete="false"
      >
        <Stack direction={{ xs: "column" }} sx={{ gap: 3 }} flexWrap="wrap">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            sx={{
              gap: screenWidth < 1000 ? 2 : 3,
              flex: screenWidth < 1000 ? "1" : "1",
            }}
          >
            <TextField
              error={errors.RoadName}
              // value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              helperText={
                errors.RoadName
                  ? `This field is required , min 3 and max 20.`
                  : null
              }
              {...register("RoadName", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
              // sx={{ flex: screenWidth < 1000 ? 0.5 : "none" }}
              sx={{ flex: 0.5 }}
              label="Road Name"
              variant="filled"
            />
            <TextField
              label="Address details"
              variant="filled"
              //sx={{ flex: screenWidth < 1000 ? 0.5 : "none" }}
              sx={{ flex: 0.5 }}
              value={Address}
              onChange={onChangeAddress}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MapOutlined />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack
            direction={"column"}
            sx={{
              width:
                screenWidth < 700
                  ? "100%"
                  : screenWidth < 1000
                  ? "100%"
                  : "100%",
            }}
          >
            <MyUpdatedMap
              Part2={Part2}
              Part3={Part3}
              setSTPoint={setSTPoint}
              setENDPoint={setENDPoint}
            />
          </Stack>
        </Stack>
        <Box sx={{ textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ padding: "11px 28px", borderRadius: "13px" }}
          >
            Save Changes
          </Button>
        </Box>
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

export default GetMyOneRoad