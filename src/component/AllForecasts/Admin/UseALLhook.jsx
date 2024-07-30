import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../useNotification";
import { getALLAdminForecasting } from "../../../Redux/Actions/ForecastAction";

const UseALLhook = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getALLAdminForecasting());
  }, [dispatch]);

  const Data = useSelector((state) => state.ForecastReducer.AddAdminForecasts);
  console.log(Data);
  useEffect(() => {
    if (Data && Data.name === "AxiosError") {
      notify("Please check your internet connection", "error");
    } else if (Data && Data.data) {
    //   Data.Plans.sort((a, b) => a.price - b.price);
    const newItems = Data.data.records.map((item, index) => {
      return {
        id: index + 1,
        forecastId: item.id,
        roadId: item.road_id,
        date: item.date,
        numOfCars: item.traffic_flow,
        trafficFlow: item.classification,
      };
    });
      setItems(newItems);
    }
  }, [Data]);
  console.log(items);

  return [items];
};

export default UseALLhook;
