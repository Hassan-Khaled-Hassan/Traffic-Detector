import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteSpecificRoad,
  getALLRoads,
} from "../../../Redux/Actions/RoadsAction";
import notify from "../../useNotification";

const UseAllRoadsFunc = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [roadID, setRoadID] = useState(null);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getALLRoads());
  }, [dispatch, roadID]);

  const users = useSelector((state) => state.RoadReducer.AllRoad);

useEffect(() => {
  if (users && users.name === "AxiosError") {
    notify("Please check your internet connection", "error");
  } else if (users && users.data) {
    const data = Array.isArray(users.data) ? users.data : [users.data];
    const newItems = data.map((item, index) => {
      const parts = item.address.split(" ");
      return {
        id: index + 1,
        registrarId: item.id,
        name: item.name,
        address: parts[0],
        StartPoint: parts[1],
        EndPoint: parts[2],
        access: "Delete",
        cameraDetails: "Get All Cameras",
      };
    });
    setItems(newItems);
  }
}, [users]);


  const handleClick = useCallback(
    async (data) => {
      setLoading(true);
      await dispatch(DeleteSpecificRoad(data));
      setLoading(false);
      setIsSubmitted(true);
    },
    [dispatch]
  );

  const res = useSelector((state) => state.RoadReducer.DeleteRoad);

  useEffect(() => {
    if (!loading && isSubmitted) {
      if (res && res.status === 200) {
        notify("User road is deleted successfully", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      } else if (res.response) {
        notify("Please try again later", "error");
      }
      setIsSubmitted(false);
    }
  }, [loading, isSubmitted, res]);

  return [loading, items, handleClick, setRoadID, roadID];
};

export default UseAllRoadsFunc;
