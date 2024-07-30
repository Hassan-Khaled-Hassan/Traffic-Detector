import { DeleteUniqueUser, GetAllUsers, NewAdminAccount } from "../Types";

const Initial = {
  Users: [],
  loading: true,
  AdminAccounts: [],
  DeleteUser:[],
};
const AdminReducer = (state = Initial, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case GetAllUsers:
      return {
        ...state,
        Users: action.payload,
        loading: false,
      };
    case DeleteUniqueUser:
      return {
        DeleteUser: action.payload,
        loading: false,
      };
    case NewAdminAccount:
      return {
        AdminAccounts: action.payload,
        loading: false,
      };
    // case GetError:
    //   return {
    //     loading: true,
    //     Category: action.payload,
    //   };
    default:
      return state;
  }
};
export default AdminReducer;
