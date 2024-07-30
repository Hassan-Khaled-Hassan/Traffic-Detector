/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddNewRoad } from '../../../Redux/Actions/RoadsAction';
import notify from '../../useNotification';

const UseAddRoadFunc = () => {
    const [STPoint, setSTPoint] = useState({});
    const [ENDPoint, setENDPoint] = useState({});
     const [Address, setAddress] = useState("");
     const [results, setResults] = useState([]);
      const [CenterDataItem, setCenterDataItem] = useState({
        lng: 31.2357,
        lat: 30.0444,
      });
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
const onChangeAddress = (e) => {
  setAddress(e.target.value);
};
// ======================================================
const handleSearch = async () => {
  if(Address !== ""){
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          Address
        )}&format=json`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

}
console.log(results);
useEffect(() => {
  if (results.length > 0) {
    const latestResult = results[results.length - 1];
    setCenterDataItem({
      lng: parseFloat(latestResult.lon),
      lat: parseFloat(latestResult.lat),
    });
  }
}, [results]);
// =======================================================
  const handleClick = async (data) => {
    let Point1 = "";
    let Point2 = "";
    if (STPoint.lng !== undefined && ENDPoint.lng !== undefined) {
      Point1 = STPoint.lat.toString() + "-" + STPoint.lng.toString();
      Point2 = ENDPoint.lat.toString() + "-" + ENDPoint.lng.toString();
    }
    console.log(STPoint);
    console.log(ENDPoint);
    const NewData = {
      name: data.RoadName,
      address: Address + " " + Point1 + " " + Point2,
    };
    console.log(NewData);
    if (Point1 === "" || Point2===''){
        notify("please set a start point and end point on a map", "warn");
        return;
    }
     setLoading(true);
     await dispatch(AddNewRoad(NewData));
     setLoading(false);
     setIsSubmitted(true);
  };
  var res = [];
  res = useSelector((state) => state.RoadReducer.AddRoads);

    useEffect(() => {
    if (loading === false && isSubmitted === true) {
        console.log(res);
        if (res && res.status === 201) {
        notify("New Road is Added Successfully", "success");
      }
        if (res.response) {
        notify("Thre is an Error,Please try again later", "error");
        }
         setIsSubmitted(false); // Reset the flag when component re-renders
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
    handleSearch,
    CenterDataItem,
  ];
}

export default UseAddRoadFunc