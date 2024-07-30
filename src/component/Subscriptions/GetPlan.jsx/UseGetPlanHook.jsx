import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUniquePlan, getUniquePlan } from '../../../Redux/Actions/PlansActoions';
import { useEffect } from 'react';
import notify from '../../useNotification';
import { useNavigate } from 'react-router-dom';

const UseGetPlanHook = (id) => {
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
    const [Name, setName] = useState("Plane Name");
    const [Desc, setDesc] = useState("Plane Desc");
    const [Type, setType] = useState("Plane Type");
    const [Periods, setPeriods] = useState("Plane Periods");
    const [PRice, setPRice] = useState("Plane PRice");
    const [Discount, setDiscount] = useState("Plane Discount");
  // ===========================================
  useEffect(() => {
    dispatch(getUniquePlan(id));
  }, [id]);
  const Users = useSelector((state) => state.PlansReducer.OnePlan);
  //console.log(Users);
let Item = Users?.data?.Plan || [];
  useEffect(() => {
    setName(Item.name);
    setDesc(Item.description);
    setType(Item.type);
    setPeriods(Item.period_in_days);
    setPRice(Item.price);
    setDiscount(Item.discount);
  }, [Item, setValue]);
// =========================================


    useEffect(() => {
      setValue("FirstName", Name);
      setValue("Description", Desc);
      setValue("Type", Type);
      setValue("Period", Periods);
      setValue("Price", PRice);
      setValue("Discount", Discount);
    }, [Name, Desc, Type, Periods, PRice, Discount, setValue]);
// ==========================================
    const handleClick = async (data)=>{
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
    await dispatch(UpdateUniquePlan(id, NewData));
    setLoading(false);
    setIsSubmitted(true);
    }
    var res = useSelector((state) => state.PlansReducer.EditPlan);
   useEffect(() => {
     if (loading === false && isSubmitted === true) {
       console.log(res);
        if (res && res.status === 201) {
          notify("Plan is Updated Successfully", "success");
          setTimeout(() => {
            navigate("/admin-dashboard/all-Plans");
          }, 2500);
        }
        if (res.response) {
          notify("There is an Error, Please try again later", "error");
        }
        setIsSubmitted(false);
     }
   }, [loading, isSubmitted]);
  return [register, handleSubmit, errors, handleClick,loading];
};

export default UseGetPlanHook