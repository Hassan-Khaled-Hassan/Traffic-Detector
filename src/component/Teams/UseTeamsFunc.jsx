
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteSpecificUser,
  getALLUsers,
} from "../../Redux/Actions/GetAllUsers";
import notify from "../useNotification";
const UseTeamsFunc = () => {
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
 } else {
   Items = [];
 }
 let newItems = [];
 let count=1;
 if (Items.length > 0) {
   newItems = Items.map((item, index) => {
     if (item.is_admin === true) {
       return {
         id: count++, // Start with 1 and increase with each map iteration
         registrarId: item.id,
         name: item.name,
         email: item.email,
         access: "Admin",
       };
       
     } else {
       return null; // Skip items where is_admin is true
     }
   }).filter((item) => item !== null);
    // Filter out null values
 }
 
   return [newItems];
}

export default UseTeamsFunc