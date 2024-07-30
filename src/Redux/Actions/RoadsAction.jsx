import useDeleteData from "../../HooksAxios/useDeleteData";
import { useGetData, useGetDataToken } from "../../HooksAxios/useGetData";
import { useInsertData } from "../../HooksAxios/useInsertData";
import { useUpdatePatchData } from "../../HooksAxios/useUpdateData";
import { DeleteUniqueRoad, EditUniqueRoad, GetAllRoadCam, GetAllRoads, GetUniqueRoad, InsertNewRoad } from "../Types";




export const AddNewRoad = (data) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useInsertData("/road/add", data);
    console.log(response);

    dispatch({
      type: InsertNewRoad,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: InsertNewRoad,
      payload: e,
    });
  }
};

// export const getALLRoads = () => async (dispatch) => {
//   try {
//     const response = await useGetDataToken("/road/");
//     console.log(response);

//     dispatch({
//       type: GetAllRoads,
//       payload: response,
//       loading: true,
//     });
//   } catch (e) {
//     dispatch({
//       type: GetAllRoads,
//       payload: e,
//     });
//   }
// };

export const DeleteSpecificRoad = (id) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useDeleteData(`/road/${id}`);
    console.log(response);

    dispatch({
      type: DeleteUniqueRoad,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: DeleteUniqueRoad,
      payload: e,
    });
  }
};
export const getSpecificRoads = (id, data) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/road/${id}`, data);
    console.log(response);

    dispatch({
      type: GetUniqueRoad,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GetUniqueRoad,
      payload: e,
    });
  }
};
export const UpdateSpecificRoads = (id, data) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useUpdatePatchData(`/road/update/${id}`, data);
    console.log(response);

    dispatch({
      type: EditUniqueRoad,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: EditUniqueRoad,
      payload: e,
    });
  }
};
// eslint-disable-next-line react-refresh/only-export-components
// export const getALLRoadCams = (id) => async (dispatch) => {
//   try {
//     const response = await useGetData(`camera/cameras/${id}`);
//     console.log(response);

//     dispatch({
//       type: GetAllRoadCam,
//       payload: response,
//       loading: true,
//     });
//   } catch (e) {
//     dispatch({
//       type: GetAllRoadCam,
//       payload: e,
//     });
//   }
// };
 // Assuming these are your custom API functions

// Action types

// Action creators
export const getALLRoadCams = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`camera/cameras/${id}`);
    console.log(response);

    dispatch({
      type: GetAllRoadCam,
      payload: response,
      loading: true, // Assuming response contains the cameras data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GetAllRoadCam,
      payload: error,
    });
    console.error("Error fetching road cameras:", error);
    // Handle error or dispatch an action to handle error state
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const getALLRoads = () => async (dispatch) => {
  try {
    const response = await useGetData("/road/");
    console.log(response);

    dispatch({
      type: GetAllRoads,
      payload: response, // Assuming response contains the roads data
    });
  } catch (error) {
    dispatch({
      type: GetAllRoads,
      payload: error,
    });
    // Handle error or dispatch an action to handle error state
  }
};
