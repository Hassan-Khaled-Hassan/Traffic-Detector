import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  Paper,
  Stack,
  Box,
  Button,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
} from "@mui/material";
import { Calendar, formatDate } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./calender.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Add,
  CalendarViewDay,
  CalendarViewWeek,
  Done,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  TextSnippet,
} from "@mui/icons-material";
import listPlugin from "@fullcalendar/list";
import { DatePicker, DateTimePicker, DesktopDatePicker, LocalizationProvider, MobileDatePicker, MobileDateTimePicker, StaticDatePicker, StaticDateTimePicker, StaticTimePicker, TimeClock, pickersLayoutClasses } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";
import { ThreeCircles } from "react-loader-spinner";
function renderEventContent(eventInfo) {
  return (
    <div>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </div>
  );
}
function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}
// eslint-disable-next-line react/prop-types
const MyCalendar = ({ open, screenWidth, mode }) => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectInfo, setSelectInfo] = useState(null);

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  let eventGuid = 0;
  function createEventId() {
    return String(eventGuid++);
  }

  const handleDateSelect = (selectInfo) => {
    setSelectInfo(selectInfo);
    setOpenD(true);
  };

  const handleSaveEvent = (title) => {
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  // =================================================
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [OpenD, setOpenD] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [buttonText, setButtonText] = useState("Month");
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const calendarRef = useRef(null);
  const handleMenuItemClick = (name) => {
    console.log(name);
    setSelectedItem(name);
    setButtonText(name.charAt(0).toUpperCase() + name.slice(1)); // Update button text
    handleCloseUserMenu();
    let calendarApi = calendarRef.current.getApi();

    if (calendarApi) {
      switch (name) {
        case "month":
          calendarApi.changeView("dayGridMonth");
          break;
        case "week":
          calendarApi.changeView("timeGridWeek");
          break;
        case "day":
          calendarApi.changeView("timeGridDay");
          break;
        case "agenda":
          calendarApi.changeView("listWeek");
          break;
        default:
          calendarApi.changeView("listWeek");
      }
    }
  };
    useEffect(() => {
      let calendarApi = calendarRef.current.getApi();
      if(screenWidth<600){
        calendarApi.changeView("listWeek");
      }else{
          switch (selectedItem) {
            case "month":
              calendarApi.changeView("dayGridMonth");
              break;
            case "week":
              calendarApi.changeView("timeGridWeek");
              break;
            case "day":
              calendarApi.changeView("timeGridDay");
              break;
            case "agenda":
              calendarApi.changeView("listWeek");
              break;
            default:
              calendarApi.changeView("dayGridMonth");
          }
      }
    }, [screenWidth]);
  //  ==============================
    const {
      register,
      handleSubmit,
      control,
      formState: { errors },
    } = useForm();
      const [selectedIndex, setSelectedIndex] = useState(null);

      const handleClick = (index) => {
        setSelectedIndex(index);
      };
    let colors = [
      {
        color: "rgb(0, 167, 111)",
        shabow: "rgb(0, 167, 111,0.80)",
      },
      {
        color: "rgb(142, 51, 255)",
        shabow: "rgb(142, 51, 255,0.80)",
      },
      {
        color: "rgb(0, 184, 217)",
        shabow: "rgb(0, 184, 217,0.80)",
      },
      {
        color: "rgb(0, 55, 104)",
        shabow: "rgb(0, 55, 104,0.80)",
      },
      {
        color: "rgb(34, 197, 94)",
        shabow: "rgb(34, 197, 94,0.80)",
      },
      {
        color: "rgb(255, 171, 0)",
        shabow: "rgb(255, 171, 0,0.80)",
      },
      {
        color: "rgb(255, 86, 48)",
        shabow: "rgb(255, 86, 48,0.80)",
      },
      {
        color: "rgb(122, 9, 22)",
        shabow: "rgb(122, 9, 22,0.80)",
      },
    ];
    // ===============================
  const [View, setView] = useState("");
      useEffect(() => {
        const calendarAPI = calendarRef?.current?.getApi();
        setView(calendarAPI.currentData.viewTitle);
        console.log(View);
      }, [View, selectedItem]);
      const handlePreviousClick = () => {
        console.log("zxucusa");
        const calendarAPI = calendarRef?.current?.getApi();
        calendarAPI?.prev();
        console.log(calendarAPI);
        console.log(calendarAPI.currentData.viewTitle);
        setView(calendarAPI.currentData.viewTitle);
      };
      const handleNextClick = () => {
        console.log("zxucusa");
        const calendarAPI = calendarRef?.current?.getApi();
        calendarAPI?.next();
        console.log(calendarAPI);
        console.log(calendarAPI.currentData.viewTitle);
        setView(calendarAPI.currentData.viewTitle);
      };
const handleTodayClick = () => {
  const calendarAPI = calendarRef?.current?.getApi();
  if (calendarAPI) {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setDate(end.getDate() + 1);
    end.setHours(0, 0, 0, 0);
    calendarAPI.gotoDate(start); // Navigate to the start date
  }
  console.log(calendarAPI);
  setView(calendarAPI.currentData.viewTitle);
};
  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: `${
          screenWidth < 900
            ? "100%"
            : open
            ? "calc(100% - 50px)"
            : `calc(100% - 125px)`
        }`,
        margin: screenWidth > 900 ? "auto" : "0px",
        mr: `${screenWidth < 900 ? "0px" : !open ? "30px" : "auto"}`,
        mb: "30px",
      }}
      className="Calender"
    >
      <Stack direction={screenWidth > 900 ? "row" : "column"}>
        <Paper className="demo-app-sidebar">
          <h2 style={{ textAlign: "center" }}>
            All Events ({currentEvents.length})
          </h2>
          <ul>{currentEvents.map(renderSidebarEvent)}</ul>
        </Paper>
        <Paper
          elevation={0}
          square={false}
          sx={{
            width:
              screenWidth > 900 ? "80%" : screenWidth > 600 ? "85%" : "97%",
            margin: "auto",
            ml:
              screenWidth > 900
                ? "auto"
                : screenWidth > 700
                ? "95px"
                : screenWidth > 600
                ? "83px"
                : "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              maxWidth: "100%",
              margin: "auto",
              ml: 0,
              pb: 2,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ pl: "6px" }}>
              <Typography
                variant="h5"
                component="h5"
                sx={{ fontWeight: "bold" }}
              >
                Calendar
              </Typography>
            </Box>
            <Box sx={{ pl: "6px" }}>
              <Button
                variant="contained"
                startIcon={<Add />}
                color="secondary"
                sx={{
                  height: "45px",
                  margin: "auto",
                  borderRadius: "15px",
                }}
                onClick={() => {
                  setOpenD(true);
                }}
              >
                Add Event
              </Button>
            </Box>
          </Box>
          <Paper
            elevation={0}
            square={false}
            sx={{
              bgcolor: mode === "dark" ? "rgb(33,43,54)" : "rgb(255, 255, 255)",
              color: mode === "dark" ? "rgb(255,255,255)" : "rgb(33, 43, 54)",
              borderRadius: "14px",
              position: "relative",
              overflow: "hidden",
              zIndex: "0",
              boxShadow:
                mode === "dark"
                  ? "rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.12) 0px 12px 24px -4px"
                  : "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
            }}
          >
            <Stack
              spacing={2}
              className="css-ol17ie"
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "16px",
                alignItems: "center",
              }}
            >
              <Button
                startIcon={
                  selectedItem === "month" || selectedItem === "" ? (
                    <CalendarMonthIcon />
                  ) : selectedItem === "week" ? (
                    <CalendarViewWeek />
                  ) : selectedItem === "day" ? (
                    <CalendarViewDay />
                  ) : (
                    <TextSnippet />
                  )
                }
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleOpenUserMenu}
                size="small"
                color="inherit"
              >
                {buttonText}
              </Button>
              <Menu
                sx={{
                  mt: "35px",
                  color:
                    mode === "dark" ? "rgb(255,255,255)" : "rgb(33, 43, 54)",
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  sx={{
                    pl: "0px",
                    pr: "0px",
                    bgcolor:
                      selectedItem === "month"
                        ? "rgba(145, 158, 171, 0.16)"
                        : "transparent",
                    borderRadius: "12px",
                  }}
                  onClick={() => handleMenuItemClick("month")}
                >
                  <Button
                    textAlign="center"
                    sx={{
                      color: mode === "light" ? "black" : "white",
                      m: "0 10px",
                      p: "0px",
                    }}
                    startIcon={<CalendarMonthIcon />}
                  >
                    Month
                  </Button>
                </MenuItem>
                <MenuItem
                  sx={{
                    pl: "0px",
                    pr: "0px",
                    bgcolor:
                      selectedItem === "week"
                        ? "rgba(145, 158, 171, 0.16)"
                        : "transparent",
                    borderRadius: "12px",
                  }}
                  onClick={() => handleMenuItemClick("week")}
                >
                  <Button
                    textAlign="center"
                    sx={{
                      color: mode === "light" ? "black" : "white",
                      m: "0 10px",
                      p: "0px",
                    }}
                    startIcon={<CalendarViewWeek />}
                  >
                    Week
                  </Button>
                </MenuItem>
                <MenuItem
                  sx={{
                    pl: "0px",
                    pr: "0px",
                    bgcolor:
                      selectedItem === "day"
                        ? "rgba(145, 158, 171, 0.16)"
                        : "transparent",
                    borderRadius: "12px",
                    ml: "-5px",
                  }}
                  onClick={() => handleMenuItemClick("day")}
                >
                  <Button
                    textAlign="center"
                    sx={{
                      color: mode === "light" ? "black" : "white",
                      m: "0 10px",
                      p: "0px",
                    }}
                    startIcon={<CalendarViewDay />}
                  >
                    Day
                  </Button>
                </MenuItem>
                <MenuItem
                  sx={{
                    pl: "0px",
                    pr: "0px",
                    bgcolor:
                      selectedItem === "agenda"
                        ? "rgba(145, 158, 171, 0.16)"
                        : "transparent",
                    borderRadius: "12px",
                  }}
                  onClick={() => handleMenuItemClick("agenda")}
                >
                  <Button
                    textAlign="center"
                    sx={{
                      color: mode === "light" ? "black" : "white",
                      m: "0 10px",
                      p: "0px",
                    }}
                    startIcon={<TextSnippet />}
                  >
                    Agenda
                  </Button>
                </MenuItem>
              </Menu>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                className="css-hp68mp"
                sx={{ mt: "0px !important" }}
              >
                <IconButton
                  sx={{ color: "grey.400" }}
                  aria-label="add an alarm"
                >
                  <KeyboardArrowLeft onClick={handlePreviousClick} />
                </IconButton>

                <Typography variant="h6" className="css-1rukwjf">
                  {selectedItem === "month" || selectedItem === ""
                    ? "01"
                    : null}{" "}
                  {View}
                </Typography>

                <IconButton
                  sx={{ color: "grey.400" }}
                  aria-label="add an alarm"
                >
                  <KeyboardArrowRight onClick={handleNextClick} />
                </IconButton>
              </Stack>

              <Stack
                sx={{ mt: "0px !important" }}
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={handleTodayClick}
                >
                  Today
                </Button>
              </Stack>
            </Stack>

            <div className="demo-app-main">
              <FullCalendar
                ref={calendarRef}
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                  listPlugin,
                ]}
                headerToolbar={false}
                initialView={
                  selectedItem === "" || selectedItem === "month"
                    ? "dayGridMonth"
                    : selectedItem === "week"
                    ? "timeGridWeek"
                    : selectedItem === "day"
                    ? "timeGridDay"
                    : "listWeek"
                }
                sx={{ border: "2px solid red" }}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={weekendsVisible}
                select={handleDateSelect}
                eventContent={renderEventContent}
                eventClick={handleEventClick}
                eventsSet={handleEvents}
              />
            </div>
          </Paper>
        </Paper>
      </Stack>
      <Dialog
        open={OpenD}
        sx={{ borderRadius: "10px !important" }}
        onClose={() => setOpenD(false)}
      >
        <Paper
          sx={{
            width: "450px",
            borderRadius: "10px !important",
            bgcolor: mode === "dark" ? "rgb(33,43,54)" : "rgb(255, 255, 255)",
          }}
        >
          <Typography component="h2" variant="h6" sx={{ p: 3 }}>
            Add Event
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ px: 3 }}
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            autoComplete="false"
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  error={errors.FirstName}
                  helperText={
                    errors.FirstName ? `This field is required` : null
                  }
                  {...register("FirstName", {
                    required: true,
                  })}
                  sx={{ mb: "12px" }}
                  fullWidth
                  label="Title"
                  id="Title"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.Email}
                  helperText={
                    errors.Email ? `Please enter a valid email address.` : null
                  }
                  {...register("Email", {
                    required: true,
                  })}
                  fullWidth
                  label="Description"
                  sx={{ mb: "12px" }}
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={12} sx={{ mb: "12px" }}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="en"
                  sx={{ width: "100%", marginBottom: "12px" }}
                >
                  <Controller
                    name="startDate"
                    control={control}
                    defaultValue={dayjs("2022-04-17T15:30")}
                    rules={{ required: "Start date is required" }}
                    render={({ field }) => (
                      <MobileDateTimePicker
                        {...field}
                        label="Start date"
                        slotProps={{
                          textField: {
                            error: !!errors.startDate,
                            helperText: errors.startDate
                              ? errors.startDate.message
                              : "",
                            sx: {
                              backgroundColor: "transparent",
                              width: "100%",
                            },
                          },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sx={{ mb: "12px" }}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="en"
                  sx={{ width: "100%", mb: "12px" }}
                >
                  <Controller
                    name="EndDate"
                    control={control}
                    defaultValue={dayjs()}
                    rules={{ required: "Start date is required" }}
                    render={({ field }) => (
                      <MobileDateTimePicker
                        {...field}
                        label="End date"
                        slotProps={{
                          textField: {
                            error: !!errors.startDate,
                            helperText: errors.startDate
                              ? errors.startDate.message
                              : "",
                            sx: {
                              backgroundColor: "transparent",
                              width: "100%",
                            },
                            layout: {
                              sx: {
                                [`.${pickersLayoutClasses.tabs}`]: {
                                  gridColumn: 1,
                                  gridRow: 2,
                                  color: "red",
                                },
                              },
                            },
                          },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sx={{ mb: "12px" }}>
                <Stack sx={{ flexDirection: "row" }}>
                  {colors.map((item, index) => {
                    return (
                      <Button
                        key={index}
                        onClick={() => handleClick(index)}
                        sx={{
                          borderRadius: "268px",
                          width: "27px",
                          height: "27px",
                          minWidth: "27px",
                          mr: "8px",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: item.color,
                            width: "27px",
                            height: "27px",
                            minWidth: "27px",
                            borderRadius: "268px",
                            transform:
                              selectedIndex === index ? "scale(1.3)" : "none",
                            boxShadow:
                              selectedIndex === index
                                ? `${item.shabow} 4px 4px 8px 0px`
                                : "none",
                            outline:
                              selectedIndex === index
                                ? "rgba(122, 9, 22, 0.08) solid 2px"
                                : "none",
                            transition:
                              "all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                          }}
                        >
                          {selectedIndex === index ? (
                            <Done
                              fontSize="small"
                              sx={{ mt: "3px", color: "white" }}
                            />
                          ) : null}
                        </div>
                      </Button>
                    );
                  })}
                </Stack>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Stack sx={{ justifyContent: "end", flexDirection: "row" }}>
                <Button
                  variant="text"
                  sx={{
                    width: "30%",
                    color: mode === "dark" ? "white" : "black",
                    mr: "20px",
                    ml: "auto",
                    borderRadius: " 999px",
                    p: "10px 30px",
                    mt: 3,
                    mb: 3,
                  }}
                  onClick={() => setOpenD(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    width: "49%",
                    mr: "auto",
                    ml: "auto",
                    borderRadius: " 25px",
                    p: "10px 18px",
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
                >
                  <ThreeCircles
                    visible={true}
                    innerCircleColor="#ffec00"
                    middleCircleColor="#4fa94d"
                    outerCircleColor="red"
                    height="41"
                    width="73"
                    color="#4fa94d"
                    ariaLabel="three-circles-loading"
                    wrapperStyle={{ marginRight: "2px" }}
                    wrapperClass=""
                  />
                  Add Event
                </Button>
              </Stack>
            </Grid>
          </Box>
        </Paper>
      </Dialog>
    </Box>
  );
};

export default MyCalendar;
