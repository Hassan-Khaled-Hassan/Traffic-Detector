import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AddNewRoad,
  UpdateSpecificRoads,
  getSpecificRoads,
} from "../../../Redux/Actions/RoadsAction";
import notify from "../../useNotification";

const UseUpdateRoadHook = (id) => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Name, setName] = useState("road name");
  const [Address, setAddress] = useState("road details");
  const [Part2, setPart2] = useState("road details");
  const [Part3, setPart3] = useState("road details");
  const [STPoint, setSTPoint] = useState({ lat: 0, lng: 0 });
  const [ENDPoint, setENDPoint] = useState({ lat: 0, lng: 0 });
  let v1 = "";
  let v2 = "";
  let v3 = "";

// ==============================================
  useEffect(() => {
    dispatch(getSpecificRoads(id));
  }, [id]);

  const Users = useSelector((state) => state.RoadReducer.UniqueRoad);
  let Items = Users?.data?.result || [];
 if (Items && Items.address !== undefined) {
   const parts = Items.address.split(" ");
   v1 = parts[0];
   v2 = parts[1];
   v3 = parts[2];
}
useEffect(() => {
  if (Items && Items.name) {
    setName(Items.name);
    setAddress(v1);
    setPart2(v2);
    setPart3(v3);

    setSTPoint({
      lng: parseFloat(v2.split("-")[0]),
      lat: parseFloat(v2.split("-")[1]),
    });
    setENDPoint({
      lng: parseFloat(v3.split("-")[0]),
      lat: parseFloat(v3.split("-")[1]),
    });
  }
}, [Items]);
// ========================================
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("RoadName", Name);
  }, [Name, setValue]);

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };
//=============================================================
  const handleClick = async (data) => {
    console.log(data);
    console.log(Name);
    console.log(Address);
    console.log(STPoint);
    console.log(ENDPoint);
    let Point1 = "";
    let Point2 = "";
    if (STPoint.lng !== undefined && ENDPoint.lng !== undefined) {
      Point1 = `${STPoint.lat}-${STPoint.lng}`;
      Point2 = `${ENDPoint.lat}-${ENDPoint.lng}`;
    }
    if (Name === "" || Address === "road details") {
      notify("Please Set your address details", "warn");
      return;
    }
    const NewData = {
      name: data.RoadName,
      address: `${Address} ${Point1} ${Point2}`,
    };
    console.log(NewData);
     setLoading(true);
     await dispatch(UpdateSpecificRoads(id,NewData));
    setLoading(false);
    setIsSubmitted(true);
  };

   var res = useSelector((state) => state.RoadReducer.EditRoad);

   useEffect(() => {
     if (loading === false && isSubmitted === true) {
       console.log(res);
              if (res && res.status === 200) {
                notify("Road is Updated Successfully", "success");
                 setTimeout(() => {
                   navigate("/admin-dashboard/All-roads");
                 }, 2500);
              }
            if (res.response) {
               notify("There is an Error, Please try again later", "error");
            }
            setIsSubmitted(false);
     }
   }, [loading, isSubmitted]);

  return [
    handleSubmit,
    errors,
    register,
    loading,
    setSTPoint,
    setENDPoint,
    Address,
    onChangeAddress,
    setName,
    Part2,
    Part3,
    handleClick,
  ];
};

export default UseUpdateRoadHook;
