import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MakeYourPayment, getALLPlans } from '../../../Redux/Actions/PlansActoions';
import notify from '../../useNotification';
import { useNavigate } from 'react-router-dom';

const UsePriceHook = () => {
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [roadID, setRoadID] = useState(null);
    const [items, setItems] = useState([]);
    const dispatch = useDispatch();  
    const navigate = useNavigate();

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
  const handleClick = async (e, id, price, discount) => {
    e.preventDefault();
    console.log(id);
    console.log(price);
    console.log(discount);

    const userData = JSON.parse(localStorage.getItem("userData"));
    const Token = localStorage.getItem("token");

    if (userData && Token) {
      if (userData.is_admin) {
        notify("You cannot make payment as you are an admin", "error");
        return;
      } else {
        const NewData = {
          amount: discount > 0 ? price - (price * discount) / 100 : price,
          planId: id,
        };
        console.log(NewData);
        setLoading(true);
        try {
          //console.error(NewData);
          setLoading(true);
          await dispatch(MakeYourPayment(NewData));
          setIsSubmitted(true);
          setLoading(false);
        } catch (error) {
          console.error("Error deleting the plan:", error);
          notify("Failed to make the payment", "error");
        } finally {
          setLoading(false);
        }
      }
    } else {
      notify("You cannot make payment as you are not authorized", "error");
      setTimeout(() => {
        navigate("/Sign-Up");
      }, 2500);
    }
  };
  var res = useSelector((state) => state.PlansReducer.AddPayment);
  console.log(res);
  console.log(loading);
  console.log(isSubmitted);
 useEffect(() => {
   if (loading === false && isSubmitted === true) {
     console.log(res);
      if (res && res.status === 200) {
        notify("Plan is added Successfully", "success");
        setTimeout(() => {
        window.location.href = res.data.iframe_url;
    }, 2500);
      }
     if (res.response) {
       notify("There is an Error, Please try again later", "error");
     }
     setIsSubmitted(false);
   }
 }, [loading, isSubmitted]);




    return [items, handleClick];
}

export default UsePriceHook