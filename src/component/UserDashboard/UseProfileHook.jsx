/* eslint-disable no-useless-escape */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import { UpdateUserData } from "../../Redux/Actions/UserAction";


const UseProfileHook = () => {
         const {
           register,
           handleSubmit,
           formState: { errors },
           setValue,
         } = useForm();
           const dispatch = useDispatch();
        const [showPassword, setShowPassword] = useState(false);
        const handleTogglePasswordVisibility = () => {
          setShowPassword(!showPassword);
        };
        const regPassword =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  // ======================================
    const [user, setUser] = useState("");
    useEffect(() => {
      const userData = localStorage.getItem("userData");
      if (userData && userData != null) {
        setUser(JSON.parse(userData));
      }
    }, []);
    const regEmail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // ==============================
    //console.log(user.name);
  useEffect(() => {
    setValue("FirstName", user.name);
    setValue("Address", user.address);
    setValue("Email", user.email);
    setValue("Car", user.car_license);

  }, [user]);


      //  ================================
        const [loading, setLoading] = useState(false);
        const [isSubmitted, setIsSubmitted] = useState(false);
      const handleClick = async (data) => {
        //console.log(data)
        const NewData = {
          name: data.FirstName,
          address: data.Address,
          email: data.Email,
          password: data.Password,
          car_license: data.Car,
        };
       // console.log(NewData);
        setLoading(true);
        console.log("sdkfjsd===1");
        await dispatch(UpdateUserData(NewData));
        console.log("sdkfjsd");
        setLoading(false);
        setIsSubmitted(true);
      }
      var res = [];
      res = useSelector((state) => state.UserReducer.EditUser);
      useEffect(() => {
        if (loading === false && isSubmitted === true) {
          console.log(res);
          if (res && res.status === 200) {
            notify("User Data updated successfully", "success");
            console.log(res);
            localStorage.setItem("userData", JSON.stringify(res.data.user));
          }
           if (res.response && res.response.status === 400) {
             notify("Your Password is Wrong,Please try again", "error");
           }
          setIsSubmitted(false); // Reset the flag when component re-renders
        }
      }, [loading, isSubmitted]);
    return [
      user,
      regEmail,
      register,
      handleSubmit,
      errors,
      handleClick,
      showPassword,
      handleTogglePasswordVisibility,
      regPassword,
      loading,
    ];
}

export default UseProfileHook