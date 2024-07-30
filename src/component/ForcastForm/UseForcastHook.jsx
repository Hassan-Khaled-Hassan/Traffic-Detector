/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getALLRoads, getALLRoadCams } from "../../Redux/Actions/RoadsAction";
import notify from "../useNotification";
import { CalculateUserForecasts } from "../../Redux/Actions/ForecastAction";
import { useTypewriter } from "react-simple-typewriter";

const UseForcastHook = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [Part2, setPart2] = useState("road details");
  const [Part3, setPart3] = useState("road details");
  const [DateItem, setDateItem] = useState("");
  const [Classify, setClassify] = useState("");
  const [SavedDate, setSavedDate] = useState("");

  //const [text, settext] = useState("");

  const [STPoint, setSTPoint] = useState({});
  const [ENDPoint, setENDPoint] = useState({});
  const [itemsCams, setItemsCams] = useState([]);
  const [NewitemsSum, setNewitemsSum] = useState([]);

  const [dimensions, setDimensions] = useState([]);
  const [RoadId, setRoadId] = useState("");
  const [RoadIdOP, setRoadIdOP] = useState(false);
  const [IsDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // Initialize Items state
  const [Items, setItems] = useState([]);

  const Users = useSelector((state) => state.RoadReducer.AllRoad);
  const cameras = useSelector((state) => state.RoadReducer.GetRoadCams);

  useEffect(() => {
    dispatch(getALLRoads());
  }, [dispatch]);

  useEffect(() => {
    if (Users && Users.data) {
      const data = Array.isArray(Users.data) ? Users.data : [Users.data];
      setItems(data);
    }
  }, [Users]);

  const handleChange = (event) => {
    const { value } = event.target;
    setRoadId(value);
    setRoadIdOP(true);
  };

  useEffect(() => {
    if (RoadId && RoadId !== "") {
      const selectedRoad = Items.find((item) => item.id === RoadId);
      if (selectedRoad && selectedRoad.address) {
        const parts = selectedRoad.address.split(" ");
        const v2 = parts[1];
        const v3 = parts[2];

        setPart2(v2);
        setPart3(v3);

        setSTPoint({
          lat: parseFloat(v2.split("-")[0]),
          lng: parseFloat(v2.split("-")[1]),
        });
        setENDPoint({
          lat: parseFloat(v3.split("-")[0]),
          lng: parseFloat(v3.split("-")[1]),
        });
      }
    }
  }, [RoadId, Items]);

  useEffect(() => {
    if (RoadIdOP) {
      //console.log("first")
      setDimensions([]);
      dispatch(getALLRoadCams(RoadId));
    }
  }, [dispatch, RoadId, RoadIdOP]);
  console.log(cameras);

  useEffect(() => {
    if (cameras && cameras.data) {
      let cameraArray = [];

      if (Array.isArray(cameras.data.AllCameras)) {
        cameraArray = cameras.data.AllCameras;
      } else if (typeof cameras.data.AllCameras === "object") {
        cameraArray = [cameras.data.AllCameras];
      } else if (cameras.data.Cameras && cameras.data.Road_Cams) {
        cameraArray = [cameras.data];
      }

      setItemsCams(cameraArray);
      setLoading(false);
    }
  }, [cameras]);
    useEffect(() => {
      if (itemsCams.length > 0) {
        let newDimensions = [];
        //console.log("Processing itemsCams", itemsCams);

        if (itemsCams[0].roadCam) {
          newDimensions = itemsCams.map(
            (item) => item.roadCam.dimensions.split(" ")[1]
          );
        } else if (itemsCams[0].Road_Cams) {
          newDimensions = itemsCams.map(
            (item) => item.Road_Cams.dimensions.split(" ")[1]
          );
        }

        //console.log("New dimensions:", newDimensions);
        setDimensions(newDimensions);
      }
    }, [itemsCams]);

  // console.log(Users);
  // console.log(cameras); // Check Users object structure
  // console.log(dimensions);
  function getDaysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
  }
  const handleClick = async (data) => {
    //console.log(data.startDate.split(" ")[0]);
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userToken = localStorage.getItem("token");
    let diff = getDaysBetweenDates("2017-06-30", data.startDate.split(" ")[0]);
    console.log(diff);
    if (!userToken) {
      notify("You are not login user Please Login", "success");
      setTimeout(() => {
        navigate("/Sign-Up");
      }, 2500);
      return;
    }
    if (userData.is_premium === false && diff > 7) {
      notify("You are not Premium user Please make a Subscribe", "success");
      setTimeout(() => {
        navigate("/Pricing");
      }, 2500);
      return;
    }
    const NewData = {
      road_id: RoadId,
      date: data.startDate.split(" ")[0],
      time: data.startDate.split(" ")[1],
    };
    setSavedDate(data.startDate.split(" ")[0]);
    console.log(NewData);
    setLoading(true);
    await dispatch(CalculateUserForecasts(NewData));
    setLoading(false);
    setIsSubmitted(true);
  };
  var res = [];
  res = useSelector((state) => state.ForecastReducer.CalcForecast);
  let NewItems = [];
  useEffect(() => {
    if (loading === false && isSubmitted === true) {
      console.log(res);
      if (res && res.status === 200) {
        notify("New Road is Added Successfully", "success");
        NewItems = res.data.summary.map((item, index) => ({
          x: item.Date,
          y: Math.ceil(item.Vehicles),
        }));
        let MynewObj = {
          x: SavedDate,
          y: Math.ceil(res.data.Car_Count),
        };
        setNewitemsSum([...NewItems, MynewObj]);
        setClassify(res.data.classification_of_traffic);
      }
      // if (res.response) {
      //   notify("Thre is an Error,Please try again later", "error");
      // }
      setIsSubmitted(false); // Reset the flag when component re-renders
    }
  }, [loading, isSubmitted]);
  return [
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
  ];
};

export default UseForcastHook;
