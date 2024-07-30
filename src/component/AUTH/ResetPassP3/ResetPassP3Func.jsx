import  { useState } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePasswordFunction } from "../../../Redux/Actions/authAction";
import notify from "../../useNotification";
import { useEffect } from "react";
const ResetPassP3Func = () => {
    const regPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

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
      if (data.pass === data.confirmpass) {
        const NewData = {
          email: localStorage.getItem("reset-Mail"),
          password: data.pass,
        };
        console.log(NewData);
        setLoading(true);
        await dispatch(UpdatePasswordFunction(NewData));
        setLoading(false);
        setIsSubmitted(true);
      }else{
        notify("Password not equal the confirmed password", "error");
      }
    };
      var res = [];
      res = useSelector((state) => state.authReducer.UpdatePass);
        useEffect(() => {
          if (loading === false && isSubmitted === true) {
            console.log(res);
            if (res && res.status === 200) {
              notify("Rest Password is updated successfully", "success");
              setTimeout(() => {
                navigate("/login");
              }, 2500);
            } else {
              notify("Please check your password again", "error");
            }
            setIsSubmitted(false); // Reset the flag when component re-renders
          }
        }, [loading, isSubmitted]);
  return [
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

export default ResetPassP3Func;
