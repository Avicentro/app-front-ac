import { useMutation } from "@tanstack/react-query";
import ApiService from "../core/api.services";

export const useLoginMutation = () => {
  return useMutation(async (data) => {
    const response = await ApiService.AuthLogin(data);
    return response.data.msg;
  });
};

export const useForgotPasswordMutation = () => {
  return useMutation(async (data) => {
    const response = await ApiService.postData(data, "/auth/forgot-password");
    return response;
  });
};

export const useChangePasswordMutation = (token: string) => {
  return useMutation(async (data) => {
    const response = await ApiService.postData(
      data,
      `/auth/new-password/${token}`
    );
    return response;
  });
};
