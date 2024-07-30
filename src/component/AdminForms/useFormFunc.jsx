import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotification';
import { AddAdminAccount } from '../../Redux/Actions/GetAllUsers';

const useFormFunc = () => {
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //  const regPassword =
  //    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const regPassword = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  // ================================================================
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   ===========================================
  const handleClick = async (data) => {
    const NewData = {
      name: data.FirstName,
      email: data.Email,
      password: data.pass,
    };
    console.log(NewData);
    setLoading(true);
    await dispatch(AddAdminAccount(NewData));
    setLoading(false);
    setIsSubmitted(true);
  };
  var res = [];
  res = useSelector((state) => state.AdminReducer.AdminAccounts);
  useEffect(() => {
    if (loading === false && isSubmitted === true) {
      //console.log(res);
      if (res && res.status === 200) {
        notify("new admin account is added successfully", "success");
        // console.log(res);
        setTimeout(() => {
          navigate("/admin-dashboard/team");
        //   window.location.reload();
        }, 2500);
      }
      if (res.response) {
        notify("please try again later", "error");
      }
    //   setIsSubmitted(false); // Reset the flag when component re-renders
    }
  }, [loading, isSubmitted]);
  return [
    handleSubmit,
    errors,
    register,
    regEmail,
    regPassword,
    phoneRegExp,
    handleTogglePasswordVisibility,
    showPassword,
    handleClick,
    loading,
  ];
}

export default useFormFunc