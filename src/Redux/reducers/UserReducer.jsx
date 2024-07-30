import {
  EditUserData,
  EditUserPass,
  GetUserData,
} from "../Types";
const Initial = {
  EditPass: [],
  loading: true,
  EditUser: [],
  getUserData: [],
  UniqueRoad: [],
  EditRoad: [],
};
const UserReducer = (state = Initial, action) => {
  switch (action.type) {
    case EditUserPass:
      return {
        ...state,
        EditPass: action.payload,
        loading: false,
      };
    case EditUserData:
      return {
        EditUser: action.payload,
        loading: false,
      };
    case GetUserData:
      return {
        getUserData: action.payload,
        loading: false,
      };
    // case GetUniqueRoad:
    //   return {
    //     UniqueRoad: action.payload,
    //     loading: false,
    //   };
    // case EditUniqueRoad:
    //   return {
    //     EditRoad: action.payload,
    //     loading: false,
    //   };
    default:
      return state;
  }
};

export default UserReducer;
