import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getALLRoadCams } from "../../../../Redux/Actions/RoadsAction";

const UseOurDialogHook = (RoadID) => {
  const [loading, setLoading] = useState(true);
  const [itemsCams, setItemsCams] = useState([]);
  const [dimensions, setDimensions] = useState([]);
  const dispatch = useDispatch();

  const cameras = useSelector((state) => state.RoadReducer.GetRoadCams);
  
  console.log(cameras);

  useEffect(() => {
    if (RoadID !== null) {
      setItemsCams([]);
      setDimensions([]);
      setLoading(true);
      dispatch(getALLRoadCams(RoadID));
    }
  }, [RoadID, dispatch]);

  useEffect(() => {
    if (cameras && cameras.data) {
      let cameraArray = [];

      if (Array.isArray(cameras.data.AllCameras)) {
        cameraArray = cameras.data.AllCameras;
      } else if (typeof cameras.data.AllCameras === "object") {
        cameraArray = [cameras.data.AllCameras];
      } else if (cameras.data.Cameras && cameras.data.Road_Cams) {
        cameraArray = [cameras.data];
      }

      setItemsCams(cameraArray);
    }
    setLoading(false);
  }, [cameras]);

  useEffect(() => {
    if (itemsCams.length > 0) {
      let newDimensions = [];
      console.log("Processing itemsCams", itemsCams);

      if (itemsCams[0].roadCam) {
        newDimensions = itemsCams.map(
          (item) => item.roadCam.dimensions.split(" ")[1]
        );
      } else if (itemsCams[0].Road_Cams) {
        newDimensions = itemsCams.map(
          (item) => item.Road_Cams.dimensions.split(" ")[1]
        );
      }

      console.log("New dimensions:", newDimensions);
      setDimensions(newDimensions);
    }
  }, [itemsCams]);

  return [loading, itemsCams, dimensions, cameras];
};

export default UseOurDialogHook;
