import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getALLPlans,
  getALLUserSubscriptions,
} from "../../../Redux/Actions/PlansActoions";
import notify from "../../useNotification";

const UseSubscriptionsHook = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const retryRef = useRef(0); // UseRef to track retries
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const userId = useMemo(() => user?.id, [user]);

  const fetchSubscriptionsAndPlans = useCallback(() => {
    if (userId) {
      dispatch(getALLUserSubscriptions(userId));
      dispatch(getALLPlans());
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (userId) {
      fetchSubscriptionsAndPlans();
    }
  }, [fetchSubscriptionsAndPlans, userId]);

  const subscribes = useSelector(
    (state) => state.PlansReducer.getSubscribesUser
  );
  const Results = useSelector((state) => state.PlansReducer.getPlans);
    console.log(subscribes);
   // console.log(Results);

  useEffect(() => {
    if (Results && Results.name === "AxiosError") {
      notify("Please check your internet connection", "error");
      setLoading(false);
    } else if (subscribes?.data?.Subscriptions && Results?.data?.Plans) {
      const SubData = Array.isArray(subscribes.data.Subscriptions)
        ? subscribes.data.Subscriptions
        : [subscribes.data.Subscriptions];
        console.log(SubData);
      const newItems = SubData.map((item, index) => {
        const plan =
          Results.data.Plans.find((plan) => plan.id === item.plan_id) || {};
        return {
          id: index + 1,
          subscribeId: item.id,
          planId: item.plan_id,
          name: plan.name || "N/A",
          StartDate: item.start_date,
          EndDate: item.end_date,
          price: plan.price || "N/A",
        };
      });

      newItems.sort((a, b) => new Date(b.StartDate) - new Date(a.StartDate));

      if (JSON.stringify(newItems) !== JSON.stringify(items)) {
        setItems(newItems);
      }
      setLoading(false);
    } else if (!Results || !subscribes) {
      // Debounce retry to prevent immediate rerenders
      const timeoutId = setTimeout(() => {
        retryRef.current += 1;
        fetchSubscriptionsAndPlans();
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [subscribes, Results, items, fetchSubscriptionsAndPlans]);

  useEffect(() => {
    if (retryRef.current > 0) {
      setLoading(true);
    }
  }, [retryRef.current]);

  return [items, loading];
};

export default UseSubscriptionsHook;
