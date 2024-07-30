import { useTheme } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../../../Redux/Actions/authAction";
import notify from "../../useNotification";
import { useNavigate } from "react-router-dom";

const SignUpFunc = () => {
  const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
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
  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // ===================================
  const handleClick = async (data) => {
    const NewData = {
      name: data.FirstName,
      address: address,
      email: data.Email,
      password: data.pass,
      car_license: "#######",
    };
    setLoading(true);
    console.log(NewData);
    await dispatch(createNewUser(NewData));
    setLoading(false);
    setIsSubmitted(true);
  };

  var res = [];
  res = useSelector((state) => state.authReducer.createUser);
  useEffect(() => {
    if (loading === false && isSubmitted === true) {
      console.log(res);
      if (res && res.status === 201) {
        notify("You are registered successfully", "success");
        console.log(res);
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      }
      if (res.response) {
        notify("You can not register using this email", "error");
      }
      setIsSubmitted(false); // Reset the flag when component re-renders
    }
  }, [loading, isSubmitted]);

  return [
    regEmail,
    phoneRegExp,
    regPassword,
    showPassword,
    theme,
    errors,
    register,
    handleSubmit,
    handleClick,
    handleTogglePasswordVisibility,
    address,
    onChangeAddress,
    loading,
  ];
};

export default SignUpFunc;
