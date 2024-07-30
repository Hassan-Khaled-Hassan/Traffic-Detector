import axios from "axios";
import useDeleteData from "../../HooksAxios/useDeleteData";
import { useGetDataToken } from "../../HooksAxios/useGetData";
import { useInsertData } from "../../HooksAxios/useInsertData";
import {
    DeleteUniqueUser,
  GetAllUsers,
  NewAdminAccount,
} from "../Types";
const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
export const getALLUsers = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("/user/");
    console.log(response);

    dispatch({
      type: GetAllUsers,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GetAllUsers,
      payload: e,
    });
  }
};
export const DeleteSpecificUser = (id) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useDeleteData(`/user/delete/${id}`);
    console.log(response);

    dispatch({
      type: DeleteUniqueUser,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: DeleteUniqueUser,
      payload: e,
    });
  }
};
export const AddAdminAccount = (data) => async (dispatch) => {
  try {
   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useInsertData("/user/Admins", data);
    console.log(response);

    dispatch({
      type: NewAdminAccount,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: NewAdminAccount,
      payload: e,
    });
  }
};