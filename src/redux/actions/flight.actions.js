import { fetchData } from '../../api';
import { SET_FLIGHTS } from '../types';

const setFlights = (payload) => {
  return {
    type: SET_FLIGHTS,
    payload,
  };
};

export const getDataFlights = (date) => (dispatch) => {
  fetchData(date).then((data) => dispatch(setFlights(data)));
};
