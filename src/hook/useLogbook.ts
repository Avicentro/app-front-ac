import { useQuery, useMutation } from "@tanstack/react-query";
import ApiService from "../core/newApi.services";

// GET
export const useAllLogbook = (dependency?: any) => {
  return useQuery({
    queryKey: ["allPeople", dependency],
    queryFn: async () =>
      await ApiService.getData({}, "/programing/logbook/all"),
    retry: true,
  });
};

// POST
export const useCreateLogbook = () => {
  return useMutation(async (data: any) => {
    const response = await ApiService.postData(data, "/programing/logbook");
    return response.data;
  });
};

export const useEditPeople = (id: string) => {
  return useMutation(async (data) => {
    const response = await ApiService.putData(data, `/people/${id}`);
    return response.data;
  });
};

//DELETE
export const useDeletePeople = () => {
  return useMutation(async (id: string) => {
    const response = await ApiService.deleteData(`/people/${id}`);
    return response;
  });
};
