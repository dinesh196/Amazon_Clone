import axios from "axios";

const instance = axios.create({
  // API Url
  baseURL: "..."
});

export default instance;
