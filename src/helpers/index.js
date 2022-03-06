import axios from "axios";

const axiosIns = axios.create({
  baseURL: "https://api.github.com",
});

export default axiosIns;
