import axiosClient from './axiosClient';

class UserApi {
  search = async (q, type = 'less') => {
    try {
      const res = await axiosClient.get('users/search', {
        params: {
          q,
          type,
        },
      });
      return res.data;
    } catch (error) {
      console.log('error: ', error);
    }
  };
}

const userApi = new UserApi();
export default userApi;
