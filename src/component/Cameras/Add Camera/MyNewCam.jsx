import { Box, Button, Dialog, DialogContent, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField } from '@mui/material';
import { PacmanLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';
import UseAddCamHook from './UseAddCamHook';
import MyCamMap from './MyCamMap';
import "./main.css"
// eslint-disable-next-line react/prop-types
const MyNewCam = ({ open, screenWidth }) => {
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
      Items,
      value,
      handleRadioChange,
      RoadId,
      handleChange,
      Part2,
      Part3,
      setMarkerPoint,
      Clicked,
    ] = UseAddCamHook();
  console.log(Items.length);
  return (
    <Box
      sx={{
        flexGrow: 1,
        // height:
        //   screenWidth > 900
        //     ? RoadId != null
        //       ? 730
        //       : 350
        //     : screenWidth > 600
        //     ? RoadId != null
        //       ? 850
        //       : 450
        //     : RoadId != null
        //     ? 930
        //     : 450,
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
              error={errors.CamModel}
              helperText={
                errors.CamModel
                  ? `This field is required , min 5 and max 50.`
                  : null
              }
              {...register("CamModel", {
                required: true,
                minLength: 5,
                maxLength: 50,
              })}
              sx={{ flex: 0.5 }}
              autoFocus
              label="Camera Model"
              variant="filled"
            />
            <TextField
              label="Company name"
              variant="filled"
              sx={{ flex: 0.5 }}
              error={errors.CamPName}
              helperText={
                errors.CamPName
                  ? `This field is required , min 5 and max 50.`
                  : null
              }
              {...register("CamPName", {
                required: true,
                minLength: 5,
                maxLength: 50,
              })}
            />
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
              gap: screenWidth < 1000 ? 2 : 3,
              flex: screenWidth < 1000 ? "1" : "1",
            }}
          >
            <TextField
              error={errors.CamDim}
              helperText={
                errors.CamDim
                  ? `This field is required , min 5 and max 50.`
                  : null
              }
              {...register("CamDim", {
                required: true,
                minLength: 5,
                maxLength: 50,
              })}
              sx={{ flex: 0.5 }}
              label="Camera Dimensions"
              variant="filled"
            />
            <Stack
              direction={"row"}
              sx={{
                flex: 0.5,
                alignItems: "center",
                gap: "1px 4px",
                height: "56px",
              }}
            >
              <FormLabel sx={{ fontSize: "1.25rem" }} id="demo-error-radios">
                Is it active ?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
                error={!!errors.Active}
                helperText={errors.Active && "This field is required."}
              >
                <FormControlLabel
                  value="true"
                  control={
                    <Radio
                      sx={{
                        color: Clicked
                          ? value !== ""
                            ? "rgba(255, 255, 255, 0.7)"
                            : "red"
                          : "rgba(255, 255, 255, 0.7)",
                        "&.Mui-checked": {
                          color: "blue",
                        },
                      }}
                    />
                  }
                  label="True."
                />
                <FormControlLabel
                  value="false"
                  control={
                    <Radio
                      sx={{
                        color: Clicked
                          ? value !== ""
                            ? "rgba(255, 255, 255, 0.7)"
                            : "red"
                          : "rgba(255, 255, 255, 0.7)",
                        "&.Mui-checked": {
                          color: "blue",
                        },
                      }}
                    />
                  }
                  label="False."
                />
              </RadioGroup>
            </Stack>
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
              gap: screenWidth < 1000 ? 2 : 3,
              flex: screenWidth < 1000 ? "1" : "1",
            }}
          >
            <FormControl
              sx={{
                flex: screenWidth > 900 ? 0.5 : 1,
                mx: screenWidth > 900 ? (value === "false" ? 0 : "auto") : 0,
              }}
              variant="filled"
            >
              <InputLabel id="demo-simple-select-error-label">
                Unique Road
              </InputLabel>
              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                label="Unique Road"
                onChange={handleChange}
                value={RoadId}
              >
                <MenuItem value={null}>
                  <em>None</em>
                </MenuItem>
                {Items && Items.length > 0
                  ? Items.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item.id}>
                          {item.name}
                        </MenuItem>
                      );
                    })
                  : null}
              </Select>
            </FormControl>
            {value === "false" ? (
              <TextField
                label="Start Date"
                type="date"
                variant="filled"
                error={errors.CamSTDate}
                helperText={errors.CamSTDate ? `This field is required` : null}
                {...register("CamSTDate", {
                  required: true,
                })}
                sx={{ flex: 0.5 }}
                value={Address}
                onChange={onChangeAddress}
              />
            ) : null}
          </Stack>
          {RoadId != null ? (
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
              <MyCamMap
                Part2={Part2}
                Part3={Part3}
                setSTPoint={setSTPoint}
                setENDPoint={setENDPoint}
                setMarkerPoint={setMarkerPoint}
              />
            </Stack>
          ) : null}
        </Stack>
        <Box sx={{ textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ padding: "11px 28px", borderRadius: "13px" }}
          >
            Add New Camera
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

export default MyNewCam