/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Chip, Collapse, Typography, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import {
  BarChartOutlined,
  Commute,
  ContactsOutlined,
  EmojiTransportation,
  ExpandLess,
  ExpandMore,
  GroupOutlined,
  HomeOutlined,
  MapOutlined,
  Payment,
  Payments,
  Subscriptions,
  TimelineOutlined,
  WebAsset,
} from "@mui/icons-material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import { NavLink, useLocation } from "react-router-dom";
import { grey } from "@mui/material/colors";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import RouteIcon from '@mui/icons-material/Route';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CameraIcon from "@mui/icons-material/Camera";
const drawerWidth = 240;
var array1 = [
  {
    id: 1,
    name: "Dashboard",
    icon: <HomeOutlined />,
    link: "/admin-dashboard",
  },
  {
    id: 2,
    name: "Manage Team",
    icon: <GroupOutlined />,
    link: "/admin-dashboard/team",
  },
  {
    id: 3,
    name: "Users Information",
    icon: <ContactsOutlined />,
    link: "/admin-dashboard/AllUsers",
  },
  {
    id: 4,
    name: "Add Admin",
    icon: <PersonOutlinedIcon />,
    link: "/admin-dashboard/addAdmin",
  },
];
var array2 = [
  {
    id: 1,
    name: "Add Road",
    icon: <AddRoadIcon />,
    link: "/admin-dashboard/add-road",
  },
  {
    id: 2,
    name: "ALL Road",
    icon: <RouteIcon />,
    link: "/admin-dashboard/All-roads",
  },
];
var array3 = [
  {
    id: 1,
    name: "Add Camera",
    icon: <AddAPhotoIcon />,
    link: "/admin-dashboard/add-Camera",
  },
  {
    id: 2,
    name: "ALL Cameras",
    icon: <CameraIcon />,
    link: "/admin-dashboard/All-Cameras",
  },
];
var array4 = [
  {
    id: 1,
    name: "All Plans",
    icon: <WebAsset />,
    link: "/admin-dashboard/all-Plans",
  },
  {
    id: 2,
    name: "All Subscriptions",
    icon: <Payments />,
    link: "/admin-dashboard/all-Subscriptions",
  },
];
var array5 = [
  {
    id: 1,
    name: "All Forecasts",
    icon: <EmojiTransportation />,
    link: "/admin-dashboard/all-forecasts",
  },
];
// ===================================

// =================================


export default function MiniDrawer({ handleDrawerOpen, open, setOpen }) {
 const theme = useTheme();
 const location = useLocation();
 const isXs = useMediaQuery(theme.breakpoints.down("sm"));
 const [variant, setVariant] = useState(isXs ? "temporary" : "permanent");

 useEffect(() => {
   setVariant(isXs ? "temporary" : "permanent");
 }, [isXs]);

 const handleDrawerClose = () => {
   setOpen(!open);
 };

 const openedMixin = (theme) => ({
   width: drawerWidth,
   transition: theme.transitions.create("width", {
     easing: theme.transitions.easing.sharp,
     duration: theme.transitions.duration.enteringScreen,
   }),
   overflowX: "hidden",
 });

 const closedMixin = (theme) => ({
   transition: theme.transitions.create("width", {
     easing: theme.transitions.easing.sharp,
     duration: theme.transitions.duration.leavingScreen,
   }),
   overflowX: "hidden",
   width: `calc(${theme.spacing(7)} + 1px)`,
   [theme.breakpoints.up("sm")]: {
     width:
       location.pathname !== "/" &&
       location.pathname !== "/Sign-Up" &&
       location.pathname !== "/login" &&
       location.pathname !== "/RestPass-P1" &&
       location.pathname !== "/RestPass-P2" &&
       location.pathname !== "/RestPass-P3" &&
       location.pathname !== "/forecasting-form" &&
       location.pathname !== "/Pricing"
         ? `calc(${theme.spacing(9)} + 1px)`
         : "0px",
   },
 });

 const DrawerHeader = styled("div")(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "flex-end",
   padding: theme.spacing(0, 1),
   ...theme.mixins.toolbar,
 }));
 const [ListOpen, setListOpen] = useState(true);

 const handleClick = () => {
   setListOpen(!ListOpen);
 };
  const [ListOpen2, setListOpen2] = useState(true);

  const handleClick2 = () => {
    setListOpen2(!ListOpen2);
  };
    const [ListOpen3, setListOpen3] = useState(true);

    const handleClick3 = () => {
      setListOpen3(!ListOpen3);
    };
      const [ListOpen4, setListOpen4] = useState(true);

  const handleClick4 = () => {
    setListOpen4(!ListOpen4);
  };
//  ===============================================
const [user, setUser] = useState("");
useEffect(() => {
  const userData = localStorage.getItem("userData");
  if (userData && userData != null) {
    setUser(JSON.parse(userData));
  }
}, []);
//  ===============================================
  return (
    <div>
      <CssBaseline />
      <Drawer
        variant={variant}
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: false }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
        }}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <DrawerHeader>
            <IconButton
              onClick={handleDrawerClose}
              sx={{ marginRight: "15px" }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Avatar
            sx={{
              mx: open ? "auto" : "5px",
              my: 1,
              width: open ? 88 : 50,
              height: open ? 88 : 50,
              border: "2px solid grey",
            }}
            alt="Remy Sharp"
            src="https://iili.io/JGbBCox.jpg"
          />
          <Typography
            align="center"
            sx={{
              fontSize: open ? "17px" : "0px",
              display: open ? "block" : "none",
            }}
          >
            {user.name}
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: open ? "17px" : "0px",
              color: theme.palette.info.main,
              display: open ? "block" : "none",
            }}
          >
            {user.admin ? "Admin" : "User"}
          </Typography>
          <Divider />
          <List>
            {array1.map((item) => (
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  component={NavLink}
                  to={item.link}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.link
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : null,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{ opacity: open ? 1 : 0, fontWeight: "500" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List
            sx={{ width: "93%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClick}
              component={NavLink}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: theme.palette.mode === "dark" ? "#0e0748" : grey[300],
              }}
            >
              <ListItemIcon>
                <MapOutlined />
              </ListItemIcon>
              <ListItemText primary="Our Roads" />
              {ListOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={ListOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {array2.map((item) => (
                  <ListItemButton
                    key={item.id}
                    component={NavLink}
                    to={item.link}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      // px: 2.5,
                      pl: 4,
                      bgcolor:
                        location.pathname === item.link
                          ? theme.palette.mode === "dark"
                            ? grey[800]
                            : grey[300]
                          : null,
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{ opacity: open ? 1 : 0, fontWeight: "500" }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </List>
          <Divider />
          <List
            sx={{ width: "93%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClick2}
              component={NavLink}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: theme.palette.mode === "dark" ? "#0e0748" : grey[300],
              }}
            >
              <ListItemIcon>
                <CameraAltIcon />
              </ListItemIcon>
              <ListItemText primary="Our Cameras" />
              {ListOpen2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={ListOpen2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {array3.map((item) => (
                  <ListItemButton
                    key={item.id}
                    component={NavLink}
                    to={item.link}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      // px: 2.5,
                      pl: 4,
                      bgcolor:
                        location.pathname === item.link
                          ? theme.palette.mode === "dark"
                            ? grey[800]
                            : grey[300]
                          : null,
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{ opacity: open ? 1 : 0, fontWeight: "500" }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </List>
          <Divider />
          <List
            sx={{ width: "93%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClick3}
              component={NavLink}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: theme.palette.mode === "dark" ? "#0e0748" : grey[300],
              }}
            >
              <ListItemIcon>
                <Subscriptions />
              </ListItemIcon>
              <ListItemText primary="Our Plans" />
              {ListOpen3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={ListOpen3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {array4.map((item) => (
                  <ListItemButton
                    key={item.id}
                    component={NavLink}
                    to={item.link}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      // px: 2.5,
                      pl: 4,
                      bgcolor:
                        location.pathname === item.link
                          ? theme.palette.mode === "dark"
                            ? grey[800]
                            : grey[300]
                          : null,
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{ opacity: open ? 1 : 0, fontWeight: "500" }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </List>
          <Divider />
          <List
            sx={{ width: "93%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClick4}
              component={NavLink}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: theme.palette.mode === "dark" ? "#0e0748" : grey[300],
              }}
            >
              <ListItemIcon>
                <Commute />
              </ListItemIcon>
              <ListItemText primary="All Forecasting" />
              {ListOpen4 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={ListOpen4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {array5.map((item) => (
                  <ListItemButton
                    key={item.id}
                    component={NavLink}
                    to={item.link}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      // px: 2.5,
                      pl: 4,
                      bgcolor:
                        location.pathname === item.link
                          ? theme.palette.mode === "dark"
                            ? grey[800]
                            : grey[300]
                          : null,
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{ opacity: open ? 1 : 0, fontWeight: "500" }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
