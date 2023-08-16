import { useQuery, useMutation } from "@tanstack/react-query";
import ApiService from "../core/newApi.services";

// GET
export const useAllIceProviders = () => {
  return useQuery({
    queryKey: ["allUser"],
    queryFn: async () => await ApiService.getData({}, "/ice-supplier/all"),
  });
};

// POST

export const useCreateIceProvider = () => {
  return useMutation(async (data) => {
    const response = await ApiService.postData(
      data,
      "/ice-supplier" //TODO: URL crear PERSON
    );
    return response.data;
  });
};

export const useEditIceProvider = (id: string) => {
  return useMutation(async (data) => {
    const response = await ApiService.putData(data, `/ice-supplier/${id}`);
    return response.data;
  });
};

//DELETE
export const useDeleteIceProvider = () => {
  return useMutation(async (id: string) => {
    const response = await ApiService.deleteData(`/ice-supplier/${id}`);
    return response;
  });
};
