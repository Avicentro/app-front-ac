import { useMutation } from "@tanstack/react-query";
import ApiService from "../core/api.services";

// Models

// Patch
export const useUpdateProgrammingMutation = (code: string) => {
  return useMutation(async (data) => {
    const response = await ApiService.patchData(
      data,
      `/programming/update-programming/${code}`
    );
    return response.data;
  });
};
