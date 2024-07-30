import { useEffect, useState } from "react";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbars from "./component/Utilities/Navbars";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./component/Utilities/Footer";
import SignUpPage from "./Pages/AuthPages/SignUpPage";
import LoginPage from "./Pages/AuthPages/LoginPage";
import RestPass1page from "./Pages/AuthPages/RestPass1page";
import RestPassP2Page from "./Pages/AuthPages/RestPassP2Page";
import ResetPassP3Page from "./Pages/AuthPages/ResetPassP3Page";
import ForecastPage from "./Pages/ForecastPage/ForecastPage";
import MiniDrawer from "./component/Utilities/MyDrawer";
import AdminPage1 from "./Pages/Admin/Accounts/AdminPage1";
import TeamPage from "./Pages/Admin/Accounts/TeamPage";
import ContactsPage from "./Pages/Admin/Accounts/ContactsPage";
import FormPage from "./Pages/Admin/Accounts/FormPage";
import AddRoadPage from "./Pages/Admin/Roads/AddRoadPage";
import AllRoadsPage from "./Pages/Admin/Roads/AllRoadsPage";
import UnigueRoadPage from "./Pages/Admin/Roads/UnigueRoadPage";
import AddCamPage from "./Pages/Admin/Cameras/AddCamPage";
import AllCamPage from "./Pages/Admin/Cameras/AllCamPage";
import GetOneMapPage from "./Pages/Admin/Cameras/GetOneMapPage";
import UserDrawer from "./component/Utilities/UserDrawer";
import UserProfilePage from "./Pages/User/UserProfilePage";
import CalenderPage from "./Pages/CalenderPage.jsx/CalenderPage";
//import AllSubscriptionsPage from "./Pages/Admin/Payments/AllPlansPage";
import UpdatePlanPage from "./Pages/Admin/Payments/UpdatePlanPage";
import AddSubscriptionsPage from "./Pages/Admin/Payments/AddSubscriptionsPage";
import MyPricingPage from "./Pages/PricingPage/MyPricingPage";
import AllPlansPage from "./Pages/Admin/Payments/AllPlansPage";
import AllSubscriptionsPages from "./Pages/Admin/Payments/AllSubscriptionsPages";
import AllSubscriptionsPlanPage from "./Pages/Admin/Payments/AllSubscriptionsPlanPage";
import AllSubscriptionsPage from './Pages/User/AllSubscriptionsPage';
import MyForestingPage from "./Pages/Admin/MyForecastPage/MyForestingPage";
import UserForecastPage from "./Pages/ForecastPage/UserForecast/UserForecastPage";
import Fab from '@mui/material/Fab';
import { FabSection } from "./component/ChatBotSection/FabSection";
import ChatBotMine from "./component/ChatBotSection/ChatBotMine";
function App() {
  const [mode, setMode] = useState(
    () => localStorage.getItem("mode") || "light"
  );

  useEffect(() => {
    localStorage.setItem("mode", mode);
    document.body.classList.toggle("dark-mode", mode === "dark");
  }, [mode]);
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const Newtheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // ==================================
  const [open, setOpen] = useState(false);
  const drawerWidth = 240;
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // =========================
  const [user, setUser] = useState("");
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData && userData != null) {
      setUser(JSON.parse(userData));
    }
  }, []);
  // =======================================
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <ThemeProvider theme={Newtheme}>
        <CssBaseline />
        <>
          <Navbars
            toggleMode={toggleMode}
            mode={mode}
            handleDrawerOpen={handleDrawerOpen}
            open={open}
            drawerWidth={drawerWidth}
          />
          {user.is_admin === true ? (
            <MiniDrawer
              handleDrawerOpen={handleDrawerOpen}
              open={open}
              setOpen={setOpen}
            />
          ) : (
            <UserDrawer
              handleDrawerOpen={handleDrawerOpen}
              open={open}
              setOpen={setOpen}
            />
          )}
          <Routes>
            <Route path="/" element={<HomePage screenWidth={screenWidth} />} />
            <Route
              path="/Sign-Up"
              element={<SignUpPage mode={mode} screenWidth={screenWidth} />}
            />
            <Route
              path="/login"
              element={<LoginPage mode={mode} screenWidth={screenWidth} />}
            />
            <Route
              path="/RestPass-P1"
              element={<RestPass1page mode={mode} screenWidth={screenWidth} />}
            />
            <Route
              path="/RestPass-P2"
              element={<RestPassP2Page mode={mode} screenWidth={screenWidth} />}
            />
            <Route
              path="/RestPass-P3"
              element={
                <ResetPassP3Page mode={mode} screenWidth={screenWidth} />
              }
            />
            <Route
              path="/forecasting-form"
              element={
                <ForecastPage
                  mode={mode}
                  screenWidth={screenWidth}
                  open={open}
                />
              }
            />
            <Route
              path="/admin-dashboard"
              element={<AdminPage1 open={open} mode={mode} />}
            />
            <Route
              path="/admin-dashboard/team"
              element={<TeamPage open={open} />}
            />
            <Route
              path="/admin-dashboard/AllUsers"
              element={<ContactsPage open={open} />}
            />
            <Route
              path="/admin-dashboard/addAdmin"
              element={<FormPage open={open} />}
            />
            <Route
              path="/admin-dashboard/add-road"
              element={<AddRoadPage open={open} />}
            />
            <Route
              path="/admin-dashboard/All-roads"
              element={<AllRoadsPage open={open} mode={mode} />}
            />
            <Route
              path="/admin-dashboard/All-roads/:id"
              element={<UnigueRoadPage open={open} />}
            />
            <Route
              path="/admin-dashboard/add-Camera"
              element={<AddCamPage open={open} />}
            />
            <Route
              path="/admin-dashboard/All-Cameras"
              element={<AllCamPage open={open} />}
            />
            <Route
              path="/admin-dashboard/All-Cameras/:id"
              element={<GetOneMapPage open={open} />}
            />
            <Route
              path="user-dashboard"
              element={<UserProfilePage open={open} mode={mode} />}
            />
            <Route
              path="/admin-dashboard/all-Plans"
              element={<AllPlansPage open={open} />}
            />
            <Route
              path="/admin-dashboard/all-Plans/:id"
              element={<UpdatePlanPage open={open} mode={mode} />}
            />
            <Route
              path="/admin-dashboard/add-Plan"
              element={<AddSubscriptionsPage open={open} mode={mode} />}
            />
            <Route
              path="/admin-dashboard/all-Subscriptions"
              element={<AllSubscriptionsPages open={open} mode={mode} />}
            />
            <Route
              path="/admin-dashboard/all-Plans/subscribe/:id"
              element={<AllSubscriptionsPlanPage open={open} mode={mode} />}
            />
            <Route
              path="/admin-dashboard/all-forecasts"
              element={<MyForestingPage open={open} mode={mode} />}
            />
            <Route
              path="user-dashboard/UserCalender"
              element={<CalenderPage open={open} mode={mode} />}
            />
            <Route
              path="/user-dashboard/All-subscribes"
              element={<AllSubscriptionsPage open={open} mode={mode} />}
            />
            <Route
              path="/user-dashboard/All-forecasts"
              element={<UserForecastPage open={open} mode={mode} />}
            />
            <Route path="/Pricing" element={<MyPricingPage />} />
          </Routes>
          <Footer
            mode={mode}
            open={open}
            screenWidth={screenWidth}
            drawerWidth={drawerWidth}
          />
          <FabSection mode={mode} setIsOpen={setIsOpen} IsOpen={IsOpen} />
          {IsOpen === true ? <ChatBotMine /> : null}
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
