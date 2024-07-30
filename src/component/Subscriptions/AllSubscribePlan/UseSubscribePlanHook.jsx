import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import notify from "../../useNotification";
import { getALLSubscriptionsPlan } from "../../../Redux/Actions/PlansActoions";
const UseSubscribePlanHook = (id) => {
  const dispatch = useDispatch();
  const [Items, setItems] = useState([]);
  useEffect(() => {
    dispatch(getALLSubscriptionsPlan(id));
  }, [dispatch]);
  const items = useSelector((state) => state.PlansReducer.getSubscribesPlan);
  console.log(items);
  useEffect(() => {
    if (items && items.name === "AxiosError") {
      notify("Please check your internet connection", "error");
    } else if (items && items.data && items.data.Subscription) {
      const data = Array.isArray(items.data.Subscription) ?items.data.Subscription : [items.data.Subscription];
      const newItems = data.map((item, index) => {
        return {
          id: index + 1,
          subscribeId: item.id,
          userId: item.user_id,
          planId: item.plan_id,
          name: localStorage.getItem("PlaneName") || "N/A", // Change this to match actual plan name property
          StartDate: item.start_date,
          EndDate: item.end_date,
          price: localStorage.getItem("PlanePrice") || "N/A", // Assuming plan has price property
        };
      });
      newItems.sort((a, b) => new Date(b.StartDate) - new Date(a.StartDate));
      setItems(newItems);
    }
  }, [items]);
  return [Items];
};

export default UseSubscribePlanHook;
