/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddNewRoad, getALLRoads } from "../../../Redux/Actions/RoadsAction";
import notify from "../../useNotification";
import { AddNewCamera } from "../../../Redux/Actions/CameraAction";
const UseAddCamHook = () => {
  const [STPoint, setSTPoint] = useState({});
  const [ENDPoint, setENDPoint] = useState({});
  const [Clicked, setClicked] = useState(false);
  const [MarkerPoint, setMarkerPoint] = useState({});
  const [Address, setAddress] = useState("");
  const [Part2, setPart2] = useState("road details");
  const [Part3, setPart3] = useState("road details");
  let v1 = "";
  let v2 = "";
  let v3 = "";
  // ==============================
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   =======================================================
  const [value, setValue] = React.useState("");
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  const [RoadId, setRoadId] = React.useState(null);
  const handleChange = (event) => {
    setRoadId(event.target.value);
  };
  //   =======================================================
  useEffect(() => {
    dispatch(getALLRoads());
  }, []);
  const Users = useSelector((state) => state.RoadReducer.AllRoad);
  // get a state of loading from redux
  //console.log(Users);
  let Items = [];
  //get 4 product
  if (Users && Users.data) {
    if (Array.isArray(Users.data)) {
      Items = Users.data;
    } else if (typeof Users.data === "object") {
      Items = [Users.data];
    } else {
      Items = [];
    }
  } else {
    Items = [];
  }

  //  console.log(Items);

  let item = [];
  if (RoadId != null) {
    item = Items.find((item) => item.id === RoadId);
    if (item && item.address !== undefined) {
      //console.log(item);
      const parts = item.address.split(" ");
      v1 = parts[0];
      v2 = parts[1];
      v3 = parts[2];
    }
  }
  useEffect(() => {
    if (item && item.name) {
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
  }, [item]);
  //   =======================================================
const isWithinBounds = (point) => {
  const minLat = Math.min(
    parseFloat(Part2.split("-")[0], parseFloat(Part3.split("-")[0]))
  );
  const maxLat = Math.max(
    parseFloat(Part2.split("-")[0]),
    parseFloat(Part3.split("-")[0])
  );
  const minLng = Math.min(
    parseFloat(Part2.split("-")[1]),
    parseFloat(Part3.split("-")[1])
  );
  const maxLng = Math.max(
    parseFloat(Part2.split("-")[1]),
    parseFloat(Part3.split("-")[1])
  );
  console.log("minLat" + minLat);
  console.log("maxLat" + maxLat);
  console.log("minLng" + minLng);
  console.log("maxLng" + maxLng);

  return (
    point.lat >= minLat &&
    point.lat <= maxLat &&
    point.lng >= minLng &&
    point.lng <= maxLng
  );
};
  //   =======================================================
  //console.log(MarkerPoint);
  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleClick = async (data) => {
    setClicked(true);
    let Point1 = "";
    if (MarkerPoint.lng !== undefined) {
      Point1 = MarkerPoint.lng.toString() + "-" + MarkerPoint.lat.toString();
    }
    const currentDate = new Date().toLocaleDateString();
    console.log(Point1);
    console.log(MarkerPoint);
    console.log(Part2);
    console.log(Part3);

    const NewData = {
      road_id: RoadId,
      active: value,
      model: data.CamModel,
      Factory: data.CamPName,
      Start_Service: data.CamSTDate ? data.CamSTDate : currentDate,
      dimentions: data.CamDim + " " + Point1,
    };
    console.log(NewData);
    if (value === "") {
      notify("please set a status of a Camera", "warn");
      return;
    }
    if (!isWithinBounds(MarkerPoint)) {
      notify(
        "Please set the camera location within the selected road bounds",
        "warn"
      );
      return;
    }
    else{
      console.log("It is Valid");
    }
    if (RoadId === null) {
      notify("please select a Unique road", "warn");
      return;
    }
    if (Point1 === "") {
      notify(
        "please set a Location of a Camera on selected road on a map",
        "warn"
      );
      return;
    }
    setLoading(true);
    await dispatch(AddNewCamera(NewData));
    setLoading(false);
    setIsSubmitted(true);
  };
  var res = [];
  res = useSelector((state) => state.CameraReducer.AddCamera);

  useEffect(() => {
    if (loading === false && isSubmitted === true) {
      //console.log(res);
      if (res && res.status === 201) {
        notify("New Camera is Added Successfully", "success");
        //  console.log(res);
      }
      if (res.response) {
        notify("There is an Error,Please try again later", "error");
      }
      setIsSubmitted(false);
    }
  }, [loading, isSubmitted]);

  return [
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
  ];
};

export default UseAddCamHook;
