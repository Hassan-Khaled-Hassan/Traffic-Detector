import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../useNotification";
import { DeleteUniqueForecasting, getALLAdminForecasting, getALLUserForecasting } from "../../../Redux/Actions/ForecastAction";

const useUserForecastFunc = () => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);
const [loading, setLoading] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
    useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
        setUser(JSON.parse(userData));
    }
    }, []);
    const userId = useMemo(() => user?.id, [user]);
const fetchSubscriptionsAndPlans = useCallback(() => {
    if (userId) {
    dispatch(getALLUserForecasting(userId));
    }
}, [dispatch, userId]);
    useEffect(() => {
    if (userId) {
        fetchSubscriptionsAndPlans();
    }
    }, [fetchSubscriptionsAndPlans, userId]);

  const Data = useSelector((state) => state.ForecastReducer.UserForecast);
  console.log(Data);
  useEffect(() => {
    if (Data && Data.name === "AxiosError") {
      notify("Please check your internet connection", "error");
    } else if (Data && Data.data ) {
      const Forecasts = Array.isArray(Data.data.data)
        ? Data.data.data
        : [Data.data.data];
      console.log(Forecasts);
      const newItems = Forecasts.map((item, index) => {
        console.log(item);
        return {
          id: index + 1,
          forecastId: item.id,
          roadId: item.road_id,
          date: item.date,
          numOfCars: item.traffic_flow,
          trafficFlow: item.classification,
          myaAccess: "Delete",
        };
      });
      setItems(newItems);
    }
  }, [Data]);
  console.log(items);
  const handleClick = async (id) => {
    console.log(id);
    setLoading(true);
    await dispatch(DeleteUniqueForecasting(id));
    setLoading(false);
    setIsSubmitted(true);
  };
  var respon = [];
  respon = useSelector((state) => state.ForecastReducer.DeleteForecast);
    useEffect(() => {
      if (loading === false && isSubmitted === true) {
        console.log(respon);
        if (respon && respon.status === 200) {
          notify("User Forecast is deleted successfully", "success");
          console.log(respon);
          setTimeout(() => {
            window.location.reload();
          }, 2500);
        }
        if (respon.response) {
          notify("Please try again later", "error");
        }
        setIsSubmitted(false); // Reset the flag when component re-renders
      }
    }, [loading, isSubmitted]);

  return [items, handleClick];
};

export default useUserForecastFunc;
