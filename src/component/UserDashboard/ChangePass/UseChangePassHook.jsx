/* eslint-disable no-useless-escape */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserPass } from "../../../Redux/Actions/UserAction";
import notify from "../../useNotification";
const UseChangePassHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  // ======================================
    const regPassword =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  //  ================================
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
    const handleTogglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  const handleClick = async (data) => {
    const NewData = {
      password: data.Password,
      newpass: data.NewPassword,
    };
    console.log(data);
    setLoading(true);
    console.log(NewData);
    await dispatch(UpdateUserPass(NewData));
    setLoading(false);
    setIsSubmitted(true);
  };
    var res = [];
    res = useSelector((state) => state.UserReducer.EditPass);
    useEffect(() => {
      if (loading === false && isSubmitted === true) {
        console.log(res);
         if (res && res.status === 200) {
           notify("Your password updated successfully", "success");
           console.log(res);
        //   setTimeout(() => {
        //     navigate("/login");
        //   }, 2500);
         }
         if (res.response && res.response.status === 400) {
           notify("Your Password is Wrong,Please try again", "error");
         }
        setIsSubmitted(false); // Reset the flag when component re-renders
      }
    }, [loading, isSubmitted]);
  return [
    register,
    handleSubmit,
    errors,
    handleClick,
    regPassword,
    handleTogglePasswordVisibility,
    showPassword,
    loading,
  ];
};

export default UseChangePassHook;
