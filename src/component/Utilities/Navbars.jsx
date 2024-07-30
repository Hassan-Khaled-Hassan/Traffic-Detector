import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { LightModeOutlined, ModeNightOutlined } from "@mui/icons-material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import image from "../../images/Group 1.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import useNavHook from "./useNavHook";
import { Link, useLocation } from "react-router-dom";
import { deepOrange, indigo } from "@mui/material/colors";

const pages = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "Forecasting", to: "/forecasting-form" },
  { id: 3, name: "Contact", to: "#Contact-US" },
  { id: 4, name: "Pricing", to: "/Pricing" },
];
let userDta={}
if (localStorage.getItem("userData") !== "") {
  userDta = JSON.parse(localStorage.getItem("userData"));
}

const settings = [
  {
    id: 1,
    name: "Profile",
    to: userDta
      ? userDta.is_admin
        ? "/admin-dashboard"
        : "/user-dashboard"
      : "",
  },
  { id: 2, name: "Logout" },
];

const Navbars = ({ toggleMode, mode, open, handleDrawerOpen, drawerWidth }) => {
  const [
    anchorElUser,
    mobileMoreAnchorEl,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    handleMobileMenuOpen,
    screenWidth,
    setMobileMoreAnchorEl,
    handleLogOut,
    user,
    final,
    Token,
  ] = useNavHook();
  const theme = useTheme();
  const location = useLocation();
  // ===============================
  // { xs: "flex", sm: "none" }
  const Newtheme = createTheme({
    breakpoints: {
      values: {
        CenterValue: 800,
      },
    },
  });

  // ================================
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{ top: 40 }}
      open={Boolean(mobileMoreAnchorEl)}
      onClose={() => setMobileMoreAnchorEl(null)}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: mode === "light" ? "black" : "white",
        }}
      >
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <HomeOutlinedIcon />
          </IconButton>
          <p>Home</p>
        </MenuItem>
      </Link>
      <Link
        to="/forecasting-form"
        style={{
          textDecoration: "none",
          color: mode === "light" ? "black" : "white",
        }}
      >
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <MapOutlinedIcon />
          </IconButton>
          <p>Forecasting</p>
        </MenuItem>
      </Link>
      <a
        href="#Contact-US"
        style={{
          textDecoration: "none",
          color: mode === "light" ? "black" : "white",
        }}
      >
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <ContactsOutlinedIcon />
          </IconButton>
          <p>Contact Us</p>
        </MenuItem>
      </a>
      <Divider />
      <MenuItem onClick={toggleMode}>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          onClick={toggleMode}
        >
          <LightModeOutlined />
        </IconButton>
        <p>Mode</p>
      </MenuItem>
      {user !== "" && Token !== "" ? (
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <NotificationsIcon />
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
      ) : null}
      {user !== "" && Token !== "" ? (
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new Settings"
            color="inherit"
          >
            <SettingsOutlinedIcon />
          </IconButton>
          <p>Settings</p>
        </MenuItem>
      ) : null}
    </Menu>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: open
          ? screenWidth > 600
            ? 1000
            : 900
          : theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          marginLeft: drawerWidth,
          width: screenWidth > 600 ? `calc(100% - ${drawerWidth}px)` : "100%",
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
        p: "0px !important",
        backgroundColor: mode === "light" ? "rgb(14 46 92 / 82%)" : "#1212129e",
        backdropFilter: "blur(25px)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingLeft:
            screenWidth < 730 && screenWidth > 600 ? "10px !important" : "auto",
        }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 0,
              display:
                location.pathname !== "/" &&
                location.pathname !== "/Sign-Up" &&
                location.pathname !== "/login" &&
                location.pathname !== "/RestPass-P1" &&
                location.pathname !== "/RestPass-P2" &&
                location.pathname !== "/RestPass-P3" &&
                location.pathname !== "/forecasting-form"
                  ? "flex"
                  : "none",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: screenWidth < 730 && screenWidth > 600 ? 0 : 5,

                ...(open && { display: "none" }),
              }}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: { xs: 1, sm: "initial" }, m: "auto" }}>
            <Link to="/">
              <img
                src={image}
                alt="logo"
                style={{
                  display: { xs: "none", md: "flex" },
                  marginRight: "10px",
                  height:
                    screenWidth > 600 ? (screenWidth < 730 ? 40 : 50) : 36,
                  width:
                    screenWidth > 730
                      ? "156px"
                      : screenWidth < 730 && screenWidth > 600
                      ? "85px"
                      : "140px",
                  padding: "5px",
                  flexGrow: 1,
                }}
              />
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              ml: screenWidth > 780 ? 4 : "auto",
            }}
          >
            {pages.map((page) =>
              page.name !== "Contact" ? (
                <Link
                  key={page.id}
                  to={page.to}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ) : (
                <a
                  key={page.id}
                  href={page.to}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.name}
                  </Button>
                </a>
              )
            )}
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={toggleMode}
            >
              {mode === "light" ? <ModeNightOutlined /> : <LightModeOutlined />}
            </IconButton>
            {user !== "" && Token !== "" ? (
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <NotificationsIcon />
              </IconButton>
            ) : null}
            {user !== "" && Token !== "" ? (
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <SettingsOutlinedIcon />
              </IconButton>
            ) : null}
          </Box>
          {user !== "" && Token !== "" ? (
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: "5px" }}>
                <Avatar
                  sx={{
                    bgcolor: indigo[600],
                    color: "white",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  {final}
                </Avatar>
              </IconButton>
            </Tooltip>
          ) : null}
          {user !== "" && Token !== "" ? (
            <Menu
              sx={{ mt: "45px" }}
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
              {settings.map((setting) =>
                setting.name === "Logout" ? (
                  <MenuItem key={setting.id} onClick={handleLogOut}>
                    <Button
                      textAlign="center"
                      sx={{ color: mode === "light" ? "black" : "white" }}
                    >
                      {setting.name}
                    </Button>
                  </MenuItem>
                ) : (
                  <Link
                    key={setting.id}
                    to={setting.to}
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                      <Button
                        textAlign="center"
                        sx={{ color: mode === "light" ? "black" : "white" }}
                      >
                        {setting.name}
                      </Button>
                    </MenuItem>
                  </Link>
                )
              )}
            </Menu>
          ) : null}

          {user === "" || Token === "" ? (
            <Box sx={{ m: ["14px", 2] }}>
              <Link to="/Sign-Up">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "999px",
                    p: ["10px 22px", "10px 30px"], // Responsive padding values for mobile and larger screens
                    background:
                      "linear-gradient(-90deg, #CF77F3 0%, #009BFF 47%, #2AC9DB 100%)",
                    color: "white",
                    boxShadow:
                      "6px -2px 30px 1px #CF77F3, -13px 7px 50px 1px #009BFF",
                  }}
                >
                  Sign Up
                </Button>
              </Link>
            </Box>
          ) : null}
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      {renderMobileMenu}
    </AppBar>
  );
};

export default Navbars;
