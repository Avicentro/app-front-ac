import { useMutation } from "@tanstack/react-query";
import ApiService from "../core/api.services";

export const useLoginMutation = () => {
  return useMutation(
    async (data) => {
      const response = await ApiService.AuthLogin(data);
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log(data);
        localStorage.setItem("token", data.msg.access_token);
      },
    }
  );
};