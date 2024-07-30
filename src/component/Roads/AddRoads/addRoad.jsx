import { MapOutlined } from '@mui/icons-material';
import { Box, Button, Dialog, DialogContent, InputAdornment, Stack, TextField } from '@mui/material';
import React from 'react'
import { PacmanLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';
import MyAddMap from './MyAddMap';
import UseAddRoadFunc from './UseAddRoadFunc';

const addNewRoad = ({ open, screenWidth }) => {
  const [
    handleSubmit,
    errors,
    register,
    handleClick,
    loading,
    setSTPoint,
    setENDPoint,
    Address,
    onChangeAddress,
    handleSearch,
    CenterDataItem,
  ] = UseAddRoadFunc();
  //console.log(CenterDataItem);
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
              sx={{ flex: 0.5 }}
              label="Road Name"
              variant="filled"
            />
            <TextField
              label="Address details"
              variant="filled"
              sx={{ flex: 0.5 }}
              value={Address}
              onChange={onChangeAddress}
              onBlur={handleSearch}
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
            <MyAddMap
              setSTPoint={setSTPoint}
              setENDPoint={setENDPoint}
              CenterDataItem={CenterDataItem}
            />
          </Stack>
        </Stack>
        <Box sx={{ textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ padding: "11px 28px", borderRadius: "13px" }}
          >
            Add New Road
          </Button>
        </Box>
      </Box>
      <Dialog
        open={loading}
        sx={{ borderRadius: "40px" }}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent sx={{ py: 6, px: 16, borderRadius: "10px" }}>
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

export default addNewRoad;