import { SET_DATE } from '../types';

const dateReducer = (state = null, action) => {
  switch (action.type) {
    case SET_DATE:
      return action.payload.split('.').reverse().join('/');

    default:
      return state;
  }
};

export default dateReducer;
