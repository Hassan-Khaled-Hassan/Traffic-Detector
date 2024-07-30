/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import useDeleteData from "../../HooksAxios/useDeleteData";
import { useGetDataToken } from "../../HooksAxios/useGetData";
import { AddForecasts, DeleteForecasts, GetAllAdminForecasts, GetAllUserForecasts } from "../Types";
import { useInsertData } from './../../HooksAxios/useInsertData';




export const getALLAdminForecasting = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("/forecast/");
    console.log(response);

    dispatch({
      type: GetAllAdminForecasts,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GetAllAdminForecasts,
      payload: e,
    });
  }
};
export const getALLUserForecasting = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/forecast/${id}`);
    console.log(response);

    dispatch({
      type: GetAllUserForecasts,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GetAllUserForecasts,
      payload: e,
    });
  }
};
const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
export const CalculateUserForecasts = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://dec4-154-136-140-102.ngrok-free.app/forecast/calc",
      data,
      config
    );
    console.log(response);

    dispatch({
      type: AddForecasts,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: AddForecasts,
      payload: e,
    });
  }
};
export const DeleteUniqueForecasting = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/forecast/delete/${id}`);
    console.log(response);

    dispatch({
      type: DeleteForecasts,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: DeleteForecasts,
      payload: e,
    });
  }
};