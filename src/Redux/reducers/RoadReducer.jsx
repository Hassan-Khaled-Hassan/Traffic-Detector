import { DeleteUniqueRoad, EditUniqueRoad, GetAllRoadCam, GetAllRoads, GetUniqueRoad, InsertNewRoad } from '../Types';
const Initial = {
  AddRoads: [],
  loading: true,
  AllRoad: [],
  DeleteRoad: [],
  UniqueRoad: [],
  EditRoad: [],
  GetRoadCams: [],
};
const RoadReducer = (state = Initial, action) => {
    switch (action.type) {
      case InsertNewRoad:
        return {
          ...state,
          AddRoads: action.payload,
          loading: false,
        };
      case GetAllRoads:
        return {
          AllRoad: action.payload,
          loading: false,
        };
      case DeleteUniqueRoad:
        return {
          DeleteRoad: action.payload,
          loading: false,
        };
      case GetUniqueRoad:
        return {
          UniqueRoad: action.payload,
          loading: false,
        };
      case EditUniqueRoad:
        return {
          EditRoad: action.payload,
          loading: false,
        };
      case GetAllRoadCam:
        return {
          GetRoadCams: action.payload, // Store the data
          loading: false,
        };
      default:
        return state;
    }
};

export default RoadReducer