import useDeleteData from "../../HooksAxios/useDeleteData";
import { useGetDataToken } from "../../HooksAxios/useGetData";
import { useInsertData } from "../../HooksAxios/useInsertData";
import { useUpdatePatchData } from "../../HooksAxios/useUpdateData";
import { DeleteUniqueCam, EditUniqueCam, GetAllCams, GetUniqueCam, InsertNewCamera } from "../Types";




export const AddNewCamera = (data) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useInsertData("/camera/add", data);
    console.log(response);

    dispatch({
      type: InsertNewCamera,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: InsertNewCamera,
      payload: e,
    });
  }
};

export const getALLCameras = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("/camera/");
    console.log(response);

    dispatch({
      type: GetAllCams,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GetAllCams,
      payload: e,
    });
  }
};




export const DeleteSpecificCam = (id) => async (dispatch) => {
  console.log(id);
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useDeleteData(`/camera/${id}`);
    console.log(response);

    dispatch({
      type: DeleteUniqueCam,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: DeleteUniqueCam,
      payload: e,
    });
  }
};



// eslint-disable-next-line react-refresh/only-export-components
export const getSpecificCamera = (id, data) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/camera/${id}`, data);
    console.log(response);

    dispatch({
      type: GetUniqueCam,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GetUniqueCam,
      payload: e,
    });
  }
};


export const UpdateSpecificCam = (id, data) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useUpdatePatchData(
      `/road/camera/update/${id}`,
      data
    );
    console.log(response);

    dispatch({
      type: EditUniqueCam,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: EditUniqueCam,
      payload: e,
    });
  }
};