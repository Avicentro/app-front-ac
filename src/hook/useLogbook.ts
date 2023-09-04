import { useQuery, useMutation } from "@tanstack/react-query";
import ApiService from "../core/newApi.services";

// GET
export const useAllLogbook = (dependency?: any) => {
  return useQuery({
    queryKey: ["allLogbook", dependency],
    queryFn: async () =>
      await ApiService.getData({}, "/programing/logbook/all"),
    retry: true,
  });
};

export const useSearchLogbookByQuery = (query: string) => {
  return useQuery({
    queryKey: ["searchLogbookByQuery"],
    queryFn: async () =>
      await ApiService.getData({ query: query }, "/programing/logbook/search"),
    retry: true,
  });
};

export const useSearchLogbookByDate = (date: string) => {
  return useQuery({
    queryKey: ["searchLogbookByDate"],
    queryFn: async () =>
      await ApiService.getData({}, `/programing/logbook/date/${date}`),
    retry: false,
  });
};

// POST
export const useCreateLogbook = () => {
  return useMutation(async (data: any) => {
    const response = await ApiService.postData(data, "/programing/logbook");
    return response.data;
  });
};
