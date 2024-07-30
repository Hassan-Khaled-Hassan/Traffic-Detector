import { DeleteUniqueCam, EditUniqueCam, GetAllCams, GetUniqueCam, InsertNewCamera } from '../Types';
const Initial = {
  AddCamera: [],
  AllCams: [],
  DeleteCam: [],
  UniqueCamera: [],
  EditCam: [],
  loading: true,
};
const CameraReducer = (state = Initial, action) => {
  switch (action.type) {
    case InsertNewCamera:
      return {
        ...state,
        AddCamera: action.payload,
        loading: false,
      };
    case GetAllCams:
      return {
        AllCams: action.payload,
        loading: false,
      };
    case DeleteUniqueCam:
      return {
        DeleteCam: action.payload,
        loading: false,
      };
    case GetUniqueCam:
      return {
        UniqueCamera: action.payload,
        loading: false,
      };
    case EditUniqueCam:
      return {
        EditCam: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default CameraReducer