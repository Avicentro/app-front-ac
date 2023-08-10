import { useQuery, useMutation } from "@tanstack/react-query";
import ApiService from "../core/newApi.services";

// Models
import { useAllSchedulesProps } from "./models";

// GET
export const useThirdsSelected = () => {
  return useQuery({
    queryKey: ["thirds"],
    queryFn: async () => await ApiService.getData({}, "/ice-supplier/all"),
    retry: false,
  });
};

export const useIceInformation = (date: string) => {
  return useQuery({
    queryKey: ["ice-date"],
    queryFn: async () => await ApiService.getData({}, `/ice/date/${date}`),
    retry: false,
  });
};

// PUT

export const useAddSupplier = (id: any) => {
  return useMutation(async (data: any) => {
    const response = await ApiService.putData(data, `/ice/${id}`);
    return response.data;
  });
};

export const useAddIceInformation = () => {
  return useMutation(async (data: any) => {
    const response = await ApiService.postData(data, `/ice`);
    return response.data;
  });
};

//DELETE
export const useDeleteScheduleMutate = () => {
  return useMutation(async (id) => {
    const response = await ApiService.deleteData(`/schedule/delete/${id}`);
    return response;
  });
};
