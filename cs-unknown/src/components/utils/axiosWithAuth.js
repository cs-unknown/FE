import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    // withCredentials: true
  });
};

export default axiosWithAuth;
