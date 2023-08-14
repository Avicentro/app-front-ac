import { useQuery, useMutation } from "@tanstack/react-query";
import ApiService from "../core/newApi.services";

// GET
export const useGetEntryTime = (date: string) => {
  return useQuery({
    queryKey: ["entry-time"],
    queryFn: async () =>
      await ApiService.getData({ date }, "/programming-entry-time"),
  });
};

// POST
export const useSaveEntryTime = () => {
  return useMutation(async (date: string) => {
    const response = await ApiService.putData(
      { date },
      `/programming-entry-time`
    );
    return response.data;
  });
};
