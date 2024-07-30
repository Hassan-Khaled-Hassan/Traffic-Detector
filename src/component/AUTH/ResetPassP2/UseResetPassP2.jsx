/* eslint-disable react-hooks/rules-of-hooks */
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
 import { useNavigate } from "react-router-dom";
import { VerifyCode } from "../../../Redux/Actions/authAction";
import notify from "../../useNotification";
const UseResetPassP2 = () => {
  const [snapOpen, setsnapOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
    const dispatch = useDispatch();
  const [Code, setCode] = useState("");

  const {
    handleSubmit,
  } = useForm();
  // ======================================================================
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setsnapOpen(false);
  };
  const OnChangeCode = (e) => {
    setCode(e.target.value);
  };
  // ===================================
  const handleClick = async() => {
    if (Code === "") {
      notify("Please verify your code", "error");
      return;
    }
    localStorage.setItem("verify-code", Code);
    setLoading(true);
      await dispatch(
        VerifyCode({
          code: Code,
        })
      );
     setLoading(false);
     setIsSubmitted(true);
    // setTimeout(() => {
    //   navigate("/RestPass-P3");
    // }, 2000);
  };
  var res = [];
  res = useSelector((state) => state.authReducer.verifyCode);
    useEffect(() => {
      if (loading === false && isSubmitted === true) {
        console.log(res);
         if (res && res.status === 200) {
           notify("Rest code is verified successfully", "success");
          setTimeout(() => {
            navigate("/RestPass-P3");
          }, 2500);
         } else {
           notify("Please Try again", "error");
        }
         setIsSubmitted(false); // Reset the flag when component re-renders
      }
    }, [loading, isSubmitted]);

  return [
    theme,
    snapOpen,
    handleSubmit,
    handleClick,
    handleClose,
    OnChangeCode,
    Code,
    loading,
  ];
};

export default UseResetPassP2;
