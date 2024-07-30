import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../useNotification";
import { DeleteSpecificCam, getALLCameras } from "../../../Redux/Actions/CameraAction";

const UseAllCamsFunc = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getALLCameras());
  }, []);
  const Users = useSelector((state) => state.CameraReducer.AllCams);
  // get a state of loading from redux
  console.log(Users);
  if(Users&& Users.name === "AxiosError"){
    notify("Please Check your internet connection","error");
  }
  let Items = [];
  //get 4 product
  if (Users && Users.data) {
    Items = Users.data.camera;
    //  console.log(Items);
  } else {
    Items = [];
  }
  console.log(Items);
  let newItems = [];
if (Items) {
  // Log the initial state of Items
  console.log("Initial Items:", Items);

  const normalizedItems = Array.isArray(Items) ? Items : [Items];

  // Log the normalized items
  console.log("Normalized Items:", normalizedItems);

   newItems = normalizedItems
    .filter((item) => item !== null)
    .map((item, index) => {
      return {
        id: index + 1, // Start with 1 and increase with each map iteration
        registrarId: item.id,
        model: item.model,
        factory: item.factory,
        StService: item.start_service,
        access: "Delete",
      };
    });

  // Log the newItems array after filtering and mapping
  console.log("New Items:", newItems);
}
  console.log("New Items:", newItems);
     const handleClick = async (data) => {
       console.log(data);
           setLoading(true);
           await dispatch(DeleteSpecificCam(data));
           setLoading(false);
           setIsSubmitted(true);
     };
     var res = [];
     res = useSelector((state) => state.CameraReducer.DeleteCam);
     useEffect(() => {
       if (loading === false && isSubmitted === true) {
         console.log(res);
         if (res && res.status === 200) {
           notify("User Camera is deleted successfully", "success");
           console.log(res);
           setTimeout(() => {
             window.location.reload();
           }, 2500);
         }
         if (res.response) {
           notify("Please Check your Connection and try again later", "error");
         }
         setIsSubmitted(false); // Reset the flag when component re-renders
       }
     }, [loading, isSubmitted]);


     return [loading, newItems, handleClick];
};

export default UseAllCamsFunc;
