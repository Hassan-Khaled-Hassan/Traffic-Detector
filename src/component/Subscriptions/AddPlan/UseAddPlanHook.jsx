import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
    AddNewPlan,
  UpdateUniquePlan,
  getUniquePlan,
} from "../../../Redux/Actions/PlansActoions";
import { useEffect } from "react";
import notify from "../../useNotification";
import { useNavigate } from "react-router-dom";
const UseAddPlanHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  // ===============================
  const dispatch = useDispatch();
    const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // =================================================
 const handleClick = async (data) => {
   console.log(data);
   const NewData = {
     name: data.FirstName,
     description: data.Description,
     type: data.Type,
     price: data.Price,
     discount: data.Discount,
     period_in_days: data.Period,
   };
   console.log(NewData);
      setLoading(true);
      await dispatch(AddNewPlan(NewData));
      setLoading(false);
      setIsSubmitted(true);
 };
 var res = useSelector((state) => state.PlansReducer.AddPlan);
 useEffect(() => {
   if (loading === false && isSubmitted === true) {
     console.log(res);
      if (res && res.status === 201) {
        notify("Plan is added Successfully", "success");
        setTimeout(() => {
          navigate("/admin-dashboard/all-Subscriptions");
        }, 2500);
      }
      if (res.response) {
        notify("There is an Error, Please try again later", "error");
      }
      setIsSubmitted(false);
   }
 }, [loading, isSubmitted]);

return [register, handleSubmit, errors, handleClick, loading];
};

export default UseAddPlanHook;
