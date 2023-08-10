import { useQuery, useMutation } from "@tanstack/react-query";
import ApiService from "../core/newApi.services";

// GET
export const useAllPeople = (dependency: any) => {
  return useQuery({
    queryKey: ["allPeople", dependency],
    queryFn: async () => await ApiService.getData({}, "/people/all"),
    retry: false,
  });
};

// POST

export const useCreatePeople = () => {
  return useMutation(async (data) => {
    const response = await ApiService.postData(
      data,
      "/people" //TODO: URL crear PERSON
    );
    return response.data;
  });
};

export const useEditPeople = () => {
  return useMutation(async (data) => {
    const response = await ApiService.putData(
      data,
      "/schedule/create-production" //TODO: URL editar PERSON
    );
    return response.data;
  });
};

//DELETE
export const useDeletePeople = () => {
  return useMutation(async (id: string) => {
    const response = await ApiService.deleteData(
      `/schedule/delete/${id}` //TODO: URL eliminar PERSON
    );
    return response;
  });
};
