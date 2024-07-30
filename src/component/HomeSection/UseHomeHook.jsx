import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTypewriter } from "react-simple-typewriter";
import { getUserDataByToken } from "../../Redux/Actions/UserAction";
import _ from "lodash";

const UseHomeHook = () => {
  const videoRef = useRef(null);
  const [videoHeight, setVideoHeight] = useState(0);
  const [cardTop, setCardTop] = useState(0);
  const dispatch = useDispatch();
const [user, setUser] = useState(null);
  const handleResize = useCallback(() => {
    if (videoRef.current) {
      const height = videoRef.current.clientHeight;
      if (height !== videoHeight) {
        setVideoHeight(height);
      }
    }
  }, [videoHeight]);

  useEffect(() => {
    const throttledResize = _.throttle(handleResize, 200);
    window.addEventListener("resize", throttledResize);
    handleResize(); // Initial calculation
    return () => window.removeEventListener("resize", throttledResize);
  }, [handleResize]);

  useEffect(() => {
    const newCardTop = videoHeight > 0 ? videoHeight * 0.17 : 0;
    if (newCardTop !== cardTop) {
      setCardTop(newCardTop);
    }
  }, [videoHeight, cardTop]);

  const [text] = useTypewriter({
    words: [
      "The world’s largest map database for fresh, accurate and reliable maps.",
      "Cities speak. Tiki Taka translates. Discover what they said in 2023, in the latest Tiki Taka Traffic Detector Index.",
      "Pioneering a faster, lower-cost route to Intelligent Speed Assistance compliance.",
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 120,
  });

  const userToken = useMemo(() => localStorage.getItem("token"), []);

  useEffect(() => {
    if (userToken) {
      dispatch(getUserDataByToken());
    }
  }, [dispatch, userToken]);

  const subscribes = useSelector((state) => state.UserReducer.getUserData);

  useEffect(() => {
    if (subscribes) {
        console.log(subscribes);
        setUser(subscribes.data);
        if (subscribes && subscribes.data && subscribes.data.user) {
          localStorage.setItem(
            "userData",
            JSON.stringify(subscribes.data.user)
          );
        }
    }
  }, [subscribes]);



  return [cardTop, text, videoRef];
};

export default UseHomeHook;
