import { INCREMENT, DECREMENT } from '../actions/types';

const initialState = {
  value: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + action.payload };
    case DECREMENT:
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
};

export default counter;
