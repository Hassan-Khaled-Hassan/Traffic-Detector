/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import Headers from '../Utilities/Headers';
import NewMap from './MyForecastMap';
import UseForcastHook from './UseForcastHook';
import { Grid, ThreeCircles } from 'react-loader-spinner';
import { DatePicker, DateTimePicker, DesktopDatePicker, LocalizationProvider, MobileDatePicker, MobileDateTimePicker, StaticDatePicker, StaticDateTimePicker, StaticTimePicker, TimeClock, pickersLayoutClasses } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";
import "./form.css"
import MyForecastMap from './MyForecastMap';
import { WarningAmber } from '@mui/icons-material';
import { Line, ResponsiveLine } from '@nivo/line';
import MyLineChart from './MyLineChart';
import { useTypewriter } from 'react-simple-typewriter';
import MyWriter from './userForcasting/MyWriter';
import { useEffect, useState } from 'react';
const ForecastForm = ({ mode, screenWidth, open }) => {
  const [
    register,
    handleSubmit,
    errors,
    RoadId,
    control,
    handleChange,
    Items,
    Part2,
    Part3,
    dimensions,
    cameras,
    DateItem,
    setDateItem,
    handleClick,
    loading,
    NewitemsSum,
    Classify,
  ] = UseForcastHook();
   console.log(NewitemsSum);
   console.log(DateItem);
  // console.log(RoadId);
 // Replace with your actual value of Classify
//========================================

// ==========================================
  return (
    <Box>
      <Container
        id="pricing"
        sx={{
          pt: { xs: 15, sm: 15 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
          flexGrow: 1,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            pt: { xs: 4, sm: 6 },
            pb: { xs: 8, sm: 7 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            backgroundColor: mode === "dark" ? "rgb(16, 24, 38)" : "#f1f1f1",
            gap: { xs: 3, sm: 6 },
            borderRadius: "20px",
            flexGrow: 1,
            borderTop: "1px solid",
            borderColor: "divider",
            boxShadow:
              "#27598bc4 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
        >
          <Headers
            head="Check Forecast"
            desc="offers users the ability to quickly and conveniently check the Traffic forecast for their road."
            name="It provides a seamless user experience, allowing Users to input location and receive forecast"
          />
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "94%",
            }}
            onSubmit={handleSubmit((data) => {
              console.log(data);
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
                className="forecast-form"
              >
                <FormControl
                  sx={{
                    flex: screenWidth > 600 ? 0.5 : 1,
                    flexGrow: 1,
                    mb: screenWidth > 600 ? "auto" : 1.5,
                  }}
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
                    {Items && Items.length !== 0
                      ? Items.map((item) => (
                          <MenuItem key={item.id} value={item.id}>
                            {item.name}
                          </MenuItem>
                        ))
                      : null}
                  </Select>
                </FormControl>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="en"
                >
                  <Controller
                    name="startDate"
                    control={control}
                    defaultValue={dayjs("2022-04-17T05:30")} // Set initial time as 5:30 AM
                    rules={{ required: "Start date is required" }}
                    render={({ field: { onChange, value, ...field } }) => {
                      // Ensure value is a valid Day.js object
                      const dayjsValue = value ? dayjs(value) : null;
                      return (
                        <MobileDateTimePicker
                          {...field}
                          label="Start date"
                          value={dayjsValue}
                          onChange={(newValue) => {
                            const formattedDate = newValue
                              ? dayjs(newValue).format("YYYY-MM-DD hh:mm:ss A") // Use 12-hour format with AM/PM
                              : "";
                            console.log(formattedDate);
                            setDateItem(formattedDate);
                            onChange(formattedDate);
                          }}
                          slotProps={{
                            textField: {
                              error: !!errors.startDate,
                              helperText: errors.startDate
                                ? errors.startDate.message
                                : "",
                              sx: {
                                backgroundColor: "transparent",
                                width: screenWidth > 600 ? "50%" : "100%",
                              },
                            },
                          }}
                          ampm // Enable 12-hour clock with AM/PM
                        />
                      );
                    }}
                  />
                </LocalizationProvider>
              </Stack>
              {RoadId != "" &&
              dimensions &&
              dimensions.length > 0  ? (
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
                  <MyForecastMap
                    Part2={Part2}
                    Part3={Part3}
                    dimensions={dimensions}
                  />
                </Stack>
              ) : null}
              {cameras && cameras.response && cameras.response.data ? (
                <Box
                  sx={{ width: "100%", margin: "auto", textAlign: "center" }}
                >
                  <WarningAmber
                    sx={{ fontSize: "75px", color: "error.dark" }}
                  />
                  <Typography sx={{ fontSize: "25px", color: "white" }}>
                    There are no Cameras on this road
                  </Typography>{" "}
                </Box>
              ) : null}
            </Stack>
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: screenWidth <= 700 ? "100%" : "45%",
                  mr: "auto",
                  ml: "auto",
                  borderRadius: " 999px",
                  p: "10px 30px",
                  background:
                    "linear-gradient(-90deg, #CF77F3 0%, #009BFF 47%, #2AC9DB 100%)",
                  color: "white",
                  "&:hover": {
                    boxShadow:
                      "6px -2px 30px 1px #CF77F3, -13px 7px 50px 1px #009BFF",
                  },
                  mt: 3,
                  mb: 3,
                }}
                disabled={RoadId !== "" && DateItem !== "" ? false : true}
              >
                <ThreeCircles
                  visible={loading}
                  innerCircleColor="#ffec00"
                  middleCircleColor="#4fa94d"
                  outerCircleColor="red"
                  height="41"
                  width="73"
                  color="#4fa94d"
                  ariaLabel="three-circles-loading"
                  wrapperStyle={{ marginRight: "10px" }}
                  wrapperClass=""
                />
                Check Forecast
              </Button>
            </Box>
            {NewitemsSum && NewitemsSum.length > 0 ? (
              <MyLineChart NewitemsSum={NewitemsSum} />
            ) : null}
            {NewitemsSum && NewitemsSum.length > 0 && Classify !== "" ? (
              <Box>
                <Typography
                  sx={{
                    width: "94%",
                    m: "auto",
                    fontSize: "23px",
                    textAlign: "center",
                  }}
                >
                  Based on the chart and that result. It is clear to us that the
                  traffic flow of the Cairo road will be{" "}
                  <span style={{ color: "rgb(124 58 237 /1)",textTransform:"capitalize" }}>
                    {Classify}
                  </span>{" "}
                  crowded at that time, matched with the traffic flow of the
                  road in the previous days.
                </Typography>
              </Box>
            ) : null}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ForecastForm