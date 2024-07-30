/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getALLRoads } from "../../../Redux/Actions/RoadsAction";
import notify from "../../useNotification";
import {
  UpdateSpecificCam,
  getSpecificCamera,
} from "../../../Redux/Actions/CameraAction";

const UseGetMyCamFunc = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    dispatch(getSpecificCamera(id));
  }, [id, dispatch]);

  const CameraData = useSelector((state) => state.CameraReducer.UniqueCamera);
  //console.log(CameraData);

  let Cam_Items = CameraData?.data?.Camera || [];
  let RoadCam_Items = CameraData?.data?.RoadCamera || [];

  // console.log(Cam_Items);
  // console.log(RoadCam_Items);


  const [STPoint, setSTPoint] = useState({});
  const [ENDPoint, setENDPoint] = useState({});
  const [Clicked, setClicked] = useState(false);
  const [MarkerPoint, setMarkerPoint] = useState({});
  const [StDate, setStDate] = useState("");
  const [CamLoc, setCamLoc] = useState("Camera details");
  const [Part2, setPart2] = useState("road details");
  const [Part3, setPart3] = useState("road details");
  const [Name, setName] = useState("Camera model");
  const [Factory, setFactory] = useState("Camera Factory");
  const [Dimentions, setDimentions] = useState("Camera Dimensions");
  const [Activevalue, setActivevalue] = useState("");
  const [RoadId, setRoadId] = useState(null);
  const [Ckeck, setCkeck] = useState(1);
  let v1 = "";
  let Dim_v1 = "";
  let v2 = "";
  let Dim_v2 = "";
  let v3 = "";

  if (RoadCam_Items && typeof RoadCam_Items.dimensions === "string") {
    const parts = RoadCam_Items.dimensions.split(" ");
    Dim_v1 = parts[0];
    Dim_v2 = parts[1];
  }
  //console.log(Dim_v1);
  useEffect(() => {
      setName(Cam_Items.model);
      setFactory(Cam_Items.factory);
      setStDate(Cam_Items.start_service);
      setDimentions(Dim_v1);
      setActivevalue(`${RoadCam_Items.active}`);
      setRoadId(RoadCam_Items.road_id);
      setCamLoc(Dim_v2);
      if (typeof Dim_v2 === "string" && Dim_v2.includes("-")) {
        setMarkerPoint({
          lng: parseFloat(Dim_v2.split("-")[0]),
          lat: parseFloat(Dim_v2.split("-")[1]),
        });
      }
    
  }, [Cam_Items, RoadCam_Items, Dim_v1, Dim_v2, setValue]);
   //console.log(MarkerPoint)
// ============================================
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setValue("CamModel", Name);
    setValue("CamPName", Factory);
    setValue("CamDim", Dimentions);
  }, [Name, Factory, Dimentions, setValue]);

  const handleRadioChange = (event) => {
    setActivevalue(event.target.value);
  };

  const handleChange = (event) => {
    setRoadId(event.target.value);
    // setCkeck(Ckeck + 1);
    // if (Ckeck > 1) {
    //   window.location.reload();
    // }
  };

  useEffect(() => {
    dispatch(getALLRoads());
  }, [dispatch]);

  const Users = useSelector((state) => state.RoadReducer.AllRoad);
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


  let item = [];
  if (RoadId != null) {
    item = Items.find((item) => item.id === RoadId);
    if (item && typeof item.address === "string") {
      const parts = item.address.split(" ");
      v1 = parts[0];
      v2 = parts[1];
      v3 = parts[2];
    }
  }
  //console.log(MarkerPoint);
  useEffect(() => {
    if (item && item.name) {
      setPart2(v2);
      setPart3(v3);
      if (typeof v2 === "string" && v2.includes("-")) {
        setSTPoint({
          lng: parseFloat(v2.split("-")[0]),
          lat: parseFloat(v2.split("-")[1]),
        });
      }
      if (typeof v3 === "string" && v3.includes("-")) {
        setENDPoint({
          lng: parseFloat(v3.split("-")[0]),
          lat: parseFloat(v3.split("-")[1]),
        });
      }
    }
  }, [item, v2, v3]);

  const onChangeStDate = (e) => {
    setStDate(e.target.value);
  };
  // ============================
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
  // ===============================

  const handleClick = async (data) => {
    setClicked(true);
     let Point1 = "";
     if (MarkerPoint.lng !== undefined) {
       Point1 = `${MarkerPoint.lng}-${MarkerPoint.lat}`;
     }
     const currentDate = new Date().toLocaleDateString();
     const NewData = {
       road_id: RoadId,
       active: Activevalue,
       model: data.CamModel,
       Factory: data.CamPName,
       Start_Service:
         Activevalue === "true"
           ? currentDate
           : data.CamSTDate
           ? data.CamSTDate
           : currentDate,
       dimensions: `${data.CamDim} ${Point1}`,
     };
     console.log(NewData);
     console.log(Part2);
     console.log(Part3);
     console.log(MarkerPoint);
         if (!isWithinBounds(MarkerPoint)) {
           notify(
             "Please set the camera location within the selected road bounds",
             "warn"
           );
           return;
         } else {
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
      await dispatch(UpdateSpecificCam(id,NewData));
       setLoading(false);
       setIsSubmitted(true);
  };

  const res = useSelector((state) => state.CameraReducer.EditCam);

  useEffect(() => {
    if (loading === false && isSubmitted === true) {
      console.log(res);
       if (res && res.status === 200) {
         notify("New Camera is Added Successfully", "success");
         console.log(res);
       setTimeout(() => {
         // This will reload the page using the cache
         location.reload();
       }, 2800);
       }
       if (res.response) {
         notify("There is an Error, Please try again later", "error");
       }
      setIsSubmitted(false);
    }
  }, [loading, isSubmitted, res]);

  return [
    handleSubmit,
    errors,
    register,
    handleClick,
    loading,
    setSTPoint,
    setENDPoint,
    StDate,
    onChangeStDate,
    Items,
    Activevalue,
    handleRadioChange,
    RoadId,
    handleChange,
    Part2,
    Part3,
    Clicked,
    MarkerPoint,
    setMarkerPoint,
    Name,
  ];
};

export default UseGetMyCamFunc;
