import { useMutation } from "@tanstack/react-query";
import ApiService from "../core/api.services";

export const useSignInMutation = () => {
  return useMutation(async (data) => {
    const response = await ApiService.signIn(data);
    return response.data.msg;
  });
};
