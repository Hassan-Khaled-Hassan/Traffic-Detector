import {
  AddForecasts,
  DeleteForecasts,
  DeleteUniqueRoad,
  EditUniqueRoad,
  GetAllAdminForecasts,
  GetAllRoadCam,
  GetAllRoads,
  GetAllUserForecasts,
  GetUniqueRoad,
  InsertNewRoad,
} from "../Types";
const Initial = {
  AddAdminForecasts: [],
  CalcForecast: [],
  UserForecast: [],
  DeleteForecast: [],
  loading: true,
};
const ForecastReducer = (state = Initial, action) => {
  switch (action.type) {
    case GetAllAdminForecasts:
      return {
        ...state,
        AddAdminForecasts: action.payload,
        loading: false,
      };
    case AddForecasts:
      return {
        CalcForecast: action.payload,
        loading: false,
      };
    case GetAllUserForecasts:
      return {
        UserForecast: action.payload,
        loading: false,
      };
    case DeleteForecasts:
      return {
        DeleteForecast: action.payload,
        loading: false,
      };
    // case EditUniqueRoad:
    //   return {
    //     EditRoad: action.payload,
    //     loading: false,
    //   };
    // case GetAllRoadCam:
    //   return {
    //     GetRoadCams: action.payload, // Store the data
    //     loading: false,
    //   };
    default:
      return state;
  }
};

export default ForecastReducer;
