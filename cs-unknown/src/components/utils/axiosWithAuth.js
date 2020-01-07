import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("key");

  return axios.create({
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;
