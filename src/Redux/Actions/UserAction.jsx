import { useGetDataToken } from "../../HooksAxios/useGetData";
import { useUpdatePatchData } from "../../HooksAxios/useUpdateData";
import { EditUserData, EditUserPass, GetUserData } from "../Types";


export const UpdateUserPass = (data) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useUpdatePatchData(`/user/changePass`, data);
    console.log(response);

    dispatch({
      type: EditUserPass,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: EditUserPass,
      payload: e,
    });
  }
};
export const UpdateUserData = (data) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useUpdatePatchData(`/user/update`, data);
    console.log(response);

    dispatch({
      type: EditUserData,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: EditUserData,
      payload: e,
    });
  }
};

export const getUserDataByToken = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("/user/get_user_by_token");
    console.log(response);
    dispatch({
      type: GetUserData,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GetUserData,
      payload: e,
    });
  }
};