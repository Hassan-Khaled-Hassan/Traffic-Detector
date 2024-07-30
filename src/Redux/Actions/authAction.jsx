
import {
  AddLoginUser,
  AddNewPass,
  AddNewSignUp,
   ForgetPasswordType,
   VerifyCodeType,
} from "../Types";

import axios from "axios";
import qs from "qs";

//create new user
export const createNewUser = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://graduation-project-fdvx.onrender.com/user/register",
      data
    );
    console.log(response);

    dispatch({
      type: AddNewSignUp,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: AddNewSignUp,
      payload: e,
    });
  }
};
export const createLogin = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://graduation-project-fdvx.onrender.com/user/login",
      data
    );
    console.log(response);
    dispatch({
      type: AddLoginUser,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: AddLoginUser,
      payload: e,
    });
  }
};

export const ForgetPasswordLogin = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://graduation-project-fdvx.onrender.com/user/forgot",
      data
    );
    console.log(response);
    dispatch({
      type: ForgetPasswordType,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ForgetPasswordType,
      payload: e.response,
    });
  }
};


export const VerifyCode = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://graduation-project-fdvx.onrender.com/user/verify-code",
      data
    );
    console.log(response);
    dispatch({
      type: VerifyCodeType,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: VerifyCodeType,
      payload: e.response,
    });
  }
};
export const UpdatePasswordFunction = (data) => async (dispatch) => {
  try {
    const response = await axios.put(
      "https://graduation-project-fdvx.onrender.com/user/reset-Pass",
      data
    );
    console.log(response);
    dispatch({
      type: AddNewPass,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: AddNewPass,
      payload: e.response,
    });
  }
};
