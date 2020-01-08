import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    },
    withCredentials: true
  });
};

export default axiosWithAuth;
