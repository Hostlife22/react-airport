import { SET_FLIGHTS } from '../types';

const initialState = {
  flights: [],
};

const fligthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHTS:
      return {
        ...state,
        flights: state.flights.concat(action.payload),
      };

    default:
      return state;
  }
};

export default fligthReducer;
