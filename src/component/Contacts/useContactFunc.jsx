import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteSpecificUser, getALLUsers } from '../../Redux/Actions/GetAllUsers';
import notify from '../useNotification';

const useContactFunc = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(getALLUsers());
 }, []);
 const Users = useSelector((state) => state.AdminReducer.Users);
 // get a state of loading from redux
 if (Users && Users.name === "AxiosError") {
   notify("Please Check your internet connection", "error");
 }
 let Items = [];
 //get 4 product
 if (Users && Users.data) {
   Items = Users.data.result;
  //  console.log(Items);
 } else {
   Items = [];
 }
let newItems = [];
if (Items.length > 0) {
  newItems = Items.map((item, index) => {
    if (item.is_admin !== true) {
      return {
        id: index + 1, // Start with 1 and increase with each map iteration
        registrarId: item.id,
        name: item.name,
        email: item.email,
        address: item.address,
        car_license: item.car_license,
        is_premium: item.is_premium,
        access: "Delete",
      };
    } else {
      return null; // Skip items where is_admin is true
    }
  }).filter((item) => item !== null); // Filter out null values
}



const handleClick = async (data) => {
    console.log(data);
    setLoading(true);
    await dispatch(DeleteSpecificUser(data)); 
      setLoading(false);
      setIsSubmitted(true)
  };
  var res = [];
  res = useSelector((state) => state.AdminReducer.DeleteUser);
  useEffect(() => {
    if (loading === false && isSubmitted === true) {
      console.log(res);
      if (res && res.status === 200) {
        notify("User Account is deleted successfully", "success");
        console.log(res);
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      }
      if (res.response) {
        notify("Please try again later", "error");
      }
      setIsSubmitted(false); // Reset the flag when component re-renders
    }
  }, [loading, isSubmitted]);

 return [Items, newItems, handleClick,loading];
}

export default useContactFunc