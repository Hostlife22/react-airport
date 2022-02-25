import axios from 'axios';

const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchData = (date) => {
  const currentDate = date.replaceAll('.', '-');

  return axios.get(`${baseUrl}/${currentDate}`).then((res) => res.data.body);
};
