import { useQuery, useMutation } from "@tanstack/react-query";
import ApiService from "../core/newApi.services";

// GET
export const useGetEntryTime = (date: string) => {
  return useQuery({
    queryKey: ["entry-time"],
    queryFn: async () =>
      await ApiService.getData({}, `/programming-entry-time/date/${date}`),
  });
};

// POST
export const usePostSaveEntryTime = () => {
  return useMutation(async (data: { initProcess: string }) => {
    const response = await ApiService.postData(data, `/programming-entry-time`);
    return response.data;
  });
};

//PUT
export const usePutSaveEntryTime = (url: string) => {
  return useMutation(async (data: { initProcess: string }) => {
    const response = await ApiService.putData(
      data,
      `/programming-entry-time/${url}`
    );
    return response.data;
  });
};
