import { ActionTypes } from "../ActionTypes/ActionTypes";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  pcNumber: 0,
  streetAddress: "",
  city: "",
  region: "",
  postalCode: "",
  terms: true,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ActionTypes.TOGGLE:
      return {
        ...state,
        terms: !state.terms,
      };
    case "INCREMENT":
      return {
        ...state,
        pcNumber: state.pcNumber + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        pcNumber: state.pcNumber - 1,
      };
    default:
      return state;
  }
};
