import { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getALLPlans,
  getALLSubscriptions,
} from "./../../../Redux/Actions/PlansActoions";
import notify from "../../useNotification";

const useAllSubscribeHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [retry, setRetry] = useState(0);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      await Promise.all([
        dispatch(getALLSubscriptions()),
        dispatch(getALLPlans()),
      ]);
    } catch (error) {
      notify("Please check your internet connection", "error");
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData, retry]);

  const subscribes = useSelector((state) => state.PlansReducer.getSubscribes);
  const Results = useSelector((state) => state.PlansReducer.getPlans);

  // Enhanced logging to debug data structures
  useEffect(() => {
    console.log("Subscriptions data:", subscribes.data);
    console.log("Results data:", Results);
  }, [subscribes, Results]);

  const items = useMemo(() => {
    if (!subscribes?.data?.Subscriptios || !Results?.data?.Plans) {
      return [];
    }

    const newItems = subscribes.data.Subscriptios.map((item, index) => {
      const plan =
        Results.data.Plans.find((plan) => plan.id === item.plan_id) || {};
      return {
        id: index + 1,
        subscribeId: item.id,
        userId: item.user_id,
        planId: item.plan_id,
        name: plan.name || "N/A",
        StartDate: item.start_date,
        EndDate: item.end_date,
        price: plan.price || "N/A",
      };
    });

    return newItems.sort(
      (a, b) => new Date(b.StartDate) - new Date(a.StartDate)
    );
  }, [subscribes, Results]);

  useEffect(() => {
    if (retry > 0 && (!subscribes?.data?.Subscriptios || !Results?.Plans)) {
      setRetry((prev) => prev + 1);
    }
  }, [subscribes, Results, retry]);

  console.log("Processed items:", items);
  return [items, loading];
};

export default useAllSubscribeHook;
