import { useTheme } from "@emotion/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ForgetPasswordLogin } from "../../../Redux/Actions/authAction";
import notify from "../../useNotification";
const UseResetPassP1 = () => {
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  const theme = useTheme();
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [Email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // ======================================================================
  // ===================================
  const handleClick = async (data) => {

    console.log(data);
    const NewData = {
      email: data.Email,
    };
    setEmail(data.Email);
    setLoading(true);
    console.log(NewData);
    await dispatch(ForgetPasswordLogin(NewData));
    setLoading(false);
    setIsSubmitted(true);
  };
  var res = [];
  res = useSelector((state) => state.authReducer.ForgetPass);
  useEffect(() => {
    if (loading === false && isSubmitted === true) {
      console.log(res);
      if (res && res.status === 200) {
        notify("Rest code sent successfully to your mail", "success");
            localStorage.setItem("reset-Mail",Email);
        setTimeout(() => {
          navigate("/RestPass-P2");
        }, 2500);
      }
      else{
        notify("please write another available email", "error");
      }
       setIsSubmitted(false); // Reset the flag when component re-renders
    }
  }, [loading, isSubmitted]);
  return [
    regEmail,
    theme,
    errors,
    register,
    handleSubmit,
    handleClick,
    loading,
  ];
};

export default UseResetPassP1;
