import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteSpecificPlan, getALLPlans } from "../../../Redux/Actions/PlansActoions";
import notify from "../../useNotification";

const UsePricingHook = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [roadID, setRoadID] = useState(null);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getALLPlans());
  }, [dispatch]);

  const Data = useSelector((state) => state.PlansReducer.getPlans);
  console.log(Data);
  useEffect(() => {
    if (Data && Data.name === "AxiosError") {
      notify("Please check your internet connection", "error");
    } else if (Data && Data.data && Data.data.Plans) {
      Data.data.Plans.sort((a, b) => a.price - b.price);
      setItems(Data.data.Plans);
    }
  }, [Data]);
  console.log(items);

  return [items];
};

export default UsePricingHook;
