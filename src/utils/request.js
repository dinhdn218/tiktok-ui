import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
  try {
    const res = await request.get(path, options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default request;
