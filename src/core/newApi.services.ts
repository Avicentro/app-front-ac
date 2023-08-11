import axios from "axios";
import { Headers } from "./http.service";

const { REACT_APP_ENDPOINT_BASE_TEMP } = process.env;

const API_CLIENT = axios.create({
  baseURL: `${REACT_APP_ENDPOINT_BASE_TEMP}`,
  ...Headers,
});

// auth API

const AuthLogin = async (payload: any) => {
  const { data } = await API_CLIENT.post("/auth/login", payload);
  return data;
};

const signIn = async (payload: any) => {
  const { data } = await API_CLIENT.post("/users/sign-up", payload);
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

const patchData = async (payload: any, url: string) => {
  const { data } = await API_CLIENT.patch(url, payload);
  return data;
};

const putData = async (payload: any, url: string) => {
  const { data } = await API_CLIENT.put(url, payload);
  return data;
};

const deleteData = async (url: string) => {
  const { data } = await API_CLIENT.delete(url);
  return data;
};

const ApiService = {
  deleteData,
  patchData,
  AuthLogin,
  postData,
  putData,
  getData,
  signIn,
};

export default ApiService;
