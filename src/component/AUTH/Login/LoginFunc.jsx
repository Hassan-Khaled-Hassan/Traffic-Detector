import { useTheme } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../../useNotification";
import { createLogin } from "../../../Redux/Actions/authAction";
const LoginFunc = () => {
  //  const regPassword =
  //    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const regPassword =
    /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;


   const regEmail =
     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();
  // ======================================================================
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // ===================================
  const handleClick = async (data) => {
    const NewData = {
      email: data.Email,
      password: data.pass,
    };
    console.log(NewData);
     setLoading(true);
       await dispatch(createLogin(NewData)); 
     setLoading(false);
     setIsSubmitted(true)
  };
  var res = [];
  res = useSelector((state) => state.authReducer.LoginUser);
  useEffect(() => {
    if (loading === false && isSubmitted === true) {
      console.log(res);
      if (res && res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userData", JSON.stringify(res.data));
        notify("You are Logined successfully", "success");
        console.log(res);
        setTimeout(() => {
          navigate("/");
           window.location.reload();
        }, 2500);
      }
      if (res.response) {
        localStorage.removeItem("token");
        notify("You can not register using this email", "error");
      }
      setIsSubmitted(false); // Reset the flag when component re-renders
    }
  }, [loading, isSubmitted]);
  return [
    regEmail,
    regPassword,
    showPassword,
    theme,
    errors,
    register,
    handleSubmit,
    handleClick,
    handleTogglePasswordVisibility,
    loading,
  ];
};

export default LoginFunc;
