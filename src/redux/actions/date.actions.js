import { SET_DATE } from '../types';

const setDate = (payload) => {
  return {
    type: SET_DATE,
    payload,
  };
};

export default setDate;
