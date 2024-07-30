/* eslint-disable react-hooks/rules-of-hooks */
import useDeleteData from "../../HooksAxios/useDeleteData";
import { useGetData, useGetDataToken } from "../../HooksAxios/useGetData";
import { useInsertData } from "../../HooksAxios/useInsertData";
import { useUpdateData } from "../../HooksAxios/useUpdateData";
import { AddOnePlan, DeleteOnePlan, EditOnePlan, GetOnePlan, GetPlans, GetSubscriptions, GetSubscriptionsPlan, GetUserSubscriptions, MakeUserPay } from "../Types";



export const getALLPlans = () => async (dispatch) => {
  try {
    const response = await useGetData("/subscription/getPlans");
    console.log(response);
    dispatch({
      type: GetPlans,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GetPlans,
      payload: e,
    });
  }
};

export const getUniquePlan = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/subscription//getPlan/${id}`);
    console.log(response);
    dispatch({
      type: GetOnePlan,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GetOnePlan,
      payload: e,
    });
  }
};
export const UpdateUniquePlan = (id,data) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useUpdateData(
      `/subscription/updatePlan/${id}`,
      data
    );
    console.log(response);
    dispatch({
      type: EditOnePlan,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: EditOnePlan,
      payload: e,
    });
  }
};

export const DeleteSpecificPlan = (id) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useDeleteData(`/subscription/deletePlan/${id}`);
    console.log(response);

    dispatch({
      type: DeleteOnePlan,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: DeleteOnePlan,
      payload: e,
    });
  }
};

export const AddNewPlan = (data) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useInsertData("/subscription/addPlan/", data);
    console.log(response);

    dispatch({
      type: AddOnePlan,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: AddOnePlan,
      payload: e,
    });
  }
};
// ===================================
export const MakeYourPayment = (data) => async (dispatch) => {
  try {
    const response = await useInsertData("/subscription/subscribe/", data);
    console.log(response);
    dispatch({
      type: MakeUserPay,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: MakeUserPay,
      payload: e,
    });
  }
};
// ================================
// eslint-disable-next-line react-refresh/only-export-components
export const getALLSubscriptions = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("/subscription/getSub");
    console.log(response);
    dispatch({
      type: GetSubscriptions,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GetSubscriptions,
      payload: e,
    });
  }
};

export const getALLSubscriptionsPlan = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(
      `/subscription/getSub_by_plan/${id}`
    );
    console.log(response);
    dispatch({
      type: GetSubscriptionsPlan,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GetSubscriptionsPlan,
      payload: e,
    });
  }
};
export const getALLUserSubscriptions = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(
      `/subscription/getSub_by_user/${id}`
    );
    console.log(response);
    dispatch({
      type: GetUserSubscriptions,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GetUserSubscriptions,
      payload: e,
    });
  }
};