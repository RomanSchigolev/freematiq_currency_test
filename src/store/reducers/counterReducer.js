import { INCREMENT, DECREMENT } from '../types';

const initialState = {
  value: 0,
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + action.payload };
    case DECREMENT:
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
};

export const increaseСounterAction = (number) => ({ type: INCREMENT, payload: number });
export const decreaseCounterAction = (number) => ({ type: DECREMENT, payload: number });
