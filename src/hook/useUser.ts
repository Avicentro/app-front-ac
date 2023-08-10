import { useQuery, useMutation } from "@tanstack/react-query";
import ApiService from "../core/newApi.services";

// GET
export const useAllUser = () => {
  return useQuery({
    queryKey: ["allUser"],
    queryFn: async () => await ApiService.getData({}, "/User/all"),
    retry: false,
  });
};

// POST

export const useCreateUser = () => {
  return useMutation(async (data) => {
    const response = await ApiService.postData(
      data,
      "/schedule/create-production" //TODO: URL crear PERSON
    );
    return response.data;
  });
};

export const useEditUser = () => {
  return useMutation(async (data) => {
    const response = await ApiService.putData(
      data,
      "/schedule/create-production" //TODO: URL editar PERSON
    );
    return response.data;
  });
};

//DELETE
export const useDeleteUser = () => {
  return useMutation(async (id: string) => {
    const response = await ApiService.deleteData(
      `/schedule/delete/${id}` //TODO: URL eliminar PERSON
    );
    return response;
  });
};
