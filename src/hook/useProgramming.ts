import { useMutation } from "@tanstack/react-query";
import ApiService from "../core/api.services";

// Models

// Patch
export const useUpdateProgrammingMutation = (id: string) => {
  return useMutation(async (data) => {
    const response = await ApiService.patchData(data, `/programing/${id}`);
    return response.data;
  });
};

// Post
export const useCreateOrderEntryMutation = () => {
  return useMutation(async (data) => {
    const response = await ApiService.postData(
      data,
      `/order-entry/create-orden-entry`
    );
    return response.data;
  });
};
