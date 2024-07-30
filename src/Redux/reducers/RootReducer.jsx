import {combineReducers} from 'redux';
import authReducer from './authReducer';
import AdminReducer from './Adminreducer';
import RoadReducer from './RoadReducer';
import CameraReducer from './CameraReducer';
import UserReducer from './UserReducer';
import PlansReducer from './PlansReducer';
import ForecastReducer from './ForecastReducer';

// eslint-disable-next-line react-refresh/only-export-components
export default combineReducers({
  authReducer: authReducer,
  AdminReducer: AdminReducer,
  RoadReducer: RoadReducer,
  CameraReducer: CameraReducer,
  UserReducer: UserReducer,
  PlansReducer: PlansReducer,
  ForecastReducer: ForecastReducer,
});