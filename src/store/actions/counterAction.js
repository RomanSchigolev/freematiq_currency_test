import { DECREMENT, INCREMENT } from './types';

export const increaseCounterAction = (number) => ({ type: INCREMENT, payload: number });
export const decreaseCounterAction = (number) => ({ type: DECREMENT, payload: number });
