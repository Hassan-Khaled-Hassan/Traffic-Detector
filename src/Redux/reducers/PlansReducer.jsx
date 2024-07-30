import { AddOnePlan, DeleteOnePlan, EditOnePlan, EditUserData, EditUserPass, GetOnePlan, GetPlans, GetSubscriptions, GetSubscriptionsPlan, GetUserSubscriptions, MakeUserPay } from "../Types";
const Initial = {
  OnePlan: [],
  loading: true,
  getPlans: [],
  EditPlan: [],
  DeletePlan: [],
  AddPlan: [],
  AddPayment: [],
  getSubscribes: [],
  getSubscribesPlan: [],
  getSubscribesUser: [],
};
const PlansReducer = (state = Initial, action) => {
  switch (action.type) {
    case GetPlans:
      return {
        ...state,
        getPlans: action.payload,
        loading: false,
      };
    case GetOnePlan:
      return {
        OnePlan: action.payload,
        loading: false,
      };
    case EditOnePlan:
      return {
        EditPlan: action.payload,
        loading: false,
      };
    case DeleteOnePlan:
      return {
        DeletePlan: action.payload,
        loading: false,
      };
    case AddOnePlan:
      return {
        AddPlan: action.payload,
        loading: false,
      };
    case MakeUserPay:
      return {
        AddPayment: action.payload,
        loading: false,
      };
    case GetSubscriptions:
      return {
        getSubscribes: action.payload,
        loading: false,
      };
    case GetSubscriptionsPlan:
      return {
        getSubscribesPlan: action.payload,
        loading: false,
      };
    case GetUserSubscriptions:
      return {
        getSubscribesUser: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default PlansReducer;
