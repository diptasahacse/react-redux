import { actionTypes } from "./actionsTypes";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
  city: "",
  course: "",
  gender: null,
  checked: false,
  quantity: 0,
  message: "",
};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.input:
      return { ...state, [action.payLoad.name]: action.payLoad.value };
    case actionTypes.toggle:
      return { ...state, checked: !state.checked };
    case actionTypes.increment:
      return { ...state, quantity: state.quantity + 1 };
    case actionTypes.decrement:
      return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
};
