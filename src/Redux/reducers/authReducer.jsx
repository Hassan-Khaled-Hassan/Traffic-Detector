import {
  AddNewSignUp,
  AddLoginUser,
  ForgetPasswordType,
  VerifyCodeType,
  AddNewPass,
} from "../Types";
const Initial = {
  createUser: [],
  LoginUser: [],
  ForgetPass :[],
  verifyCode:[],
  UpdatePass :[],
  loading: true,
};
const authReducer = (state = Initial, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case AddNewSignUp:
      return {
        ...state,
        createUser: action.payload,
      };
    case AddLoginUser:
      return {
        ...state,
        LoginUser: action.payload,
      };
    case ForgetPasswordType:
      return {
        ...state,
        ForgetPass: action.payload,
      };
    case VerifyCodeType:
      return {
        ...state,
        verifyCode: action.payload,
      };
    case AddNewPass:
      return {
        ...state,
        UpdatePass: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
