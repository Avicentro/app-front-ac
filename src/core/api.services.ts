import axios from "axios";
import { Headers } from "./http.service";

const { REACT_APP_ENDPOINT_BASE } = process.env;

const API_CLIENT = axios.create({
  baseURL: `${REACT_APP_ENDPOINT_BASE}`,
  ...Headers,
});

// auth API

const AuthLogin = async (payload: any) => {
  const { data } = await API_CLIENT.post("/auth/login", payload);
  return data;
};

const getData = async (payload: any, url: string) => {
  const { data } = await API_CLIENT.get(url, {
    params: payload,
  });
  return data;
};

const postData = async (payload: any, url: string) => {
  const { data } = await API_CLIENT.post(url, payload);
  return data;
};

const ApiService = {
  AuthLogin,
  getData,
  postData,
};

export default ApiService;
