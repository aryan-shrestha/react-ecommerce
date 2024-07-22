import axios from "axios";

const baseURL = "https://fakestoreapi.com";

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
