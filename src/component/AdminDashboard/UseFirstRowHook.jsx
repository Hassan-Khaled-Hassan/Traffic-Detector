import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import { getALLUsers } from "../../Redux/Actions/GetAllUsers";
import { getALLCameras } from "../../Redux/Actions/CameraAction";
import { getALLRoads } from "../../Redux/Actions/RoadsAction";
import { getALLAdminForecasting } from "../../Redux/Actions/ForecastAction";

const UseFirstRowHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getALLUsers());
    dispatch(getALLCameras());
    dispatch(getALLRoads());
    dispatch(getALLAdminForecasting());
  }, []);

  const Users = useSelector((state) => state.AdminReducer.Users);
  console.log(Users);
  const Cams = useSelector((state) => state.CameraReducer.AllCams);
  // get a state of loading from redux
  console.log(Cams);
  const roads = useSelector((state) => state.RoadReducer.AllRoad);
  console.log(roads);
  const Data = useSelector((state) => state.ForecastReducer.AddAdminForecasts);
  console.log(Data);
  let Items = [];
  if (Users && Users.data && Users.data.result) {
    Items = Users.data.result;
  }

    let Roads = [];
  if (roads && roads.data) {
    Roads = roads.data;
  }  
  let Cameras = [];
  if (Cams && Cams.data && Cams.data.camera) {
    Cameras = Cams.data.camera;
  }
    let Forecasts = [];
    if (Data && Data.data && Data.data.records) {
      Forecasts = Data.data.records;
    }
  const roleCount = Items.reduce((acc, user) => {
    const role = user.is_premium || false; // Default to "user" if role is not specified
    if (acc[role]) {
      acc[role] += 1;
    } else {
      acc[role] = 1;
    }
    return acc;
  }, {});
    const ActiveCount = Items.reduce((acc, user) => {
      const role = user.is_premium || false; // Default to "user" if role is not specified
      if (acc[role]) {
        acc[role] += 1;
      } else {
        acc[role] = 1;
      }
      return acc;
    }, {});

const totalUsers = Items.length;
const totalRoads = Roads.length;
const totalCams = Cameras.length;
const totalForecasts = Forecasts.length;

  // Calculate percentages and round to nearest whole number
  let percentages = totalUsers
    ? Object.keys(roleCount).map((role, index) => ({
        id: role === "false" ? "Free Users" : "Premium Users",
        label: role === "false" ? "Free Users" : "Premium Users",
        value: Math.ceil((roleCount[role] / totalUsers) * 100),
       // color: role === "false" ? "#253494" : "hsl(22, 90%, 90%)",
      }))
    : [];

  // Adjust percentages to ensure they sum up to 100%
  const totalPercentage = percentages.reduce(
    (sum, role) => sum + role.value,
    0
  );
  if (totalPercentage !== 100 && percentages.length > 0) {
    const diff = 100 - totalPercentage;
    // Adjust the first percentage to make up for the rounding difference
    percentages[0].value += diff;
  }


  console.log(percentages);

  return [percentages, totalUsers, totalRoads, totalCams, totalForecasts];
};

export default UseFirstRowHook;
