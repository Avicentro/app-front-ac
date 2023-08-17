import { useQuery, useMutation } from "@tanstack/react-query";
import ApiService from "../core/newApi.services";

// GET
export const useAllPeople = (dependency?: any) => {
  return useQuery({
    queryKey: ["allPeople", dependency],
    queryFn: async () => await ApiService.getData({}, "/people/all"),
    retry: true,
  });
};

// POST

export const useCreatePeople = () => {
  return useMutation(async (data) => {
    const response = await ApiService.postData(data, "/people");
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
