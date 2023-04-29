import { useQuery, useMutation } from "@tanstack/react-query";
import ApiService from "../core/api.services";

export const useAvailableSchedules = (data: any) => {
  return useQuery({
    queryKey: ["availableSchedules"],
    queryFn: async () =>
      await ApiService.getData(data, "/schedule/get-schedules-available"),
    retry: false,
  });
};

export const useAllCustomers = () => {
  return useQuery({
    queryKey: ["allCustomers"],
    queryFn: async () => await ApiService.getData({}, "/customer/all"),
    retry: false,
  });
};

export const useSaveScheduleData = () => {
  return useMutation(async (data) => {
    const response = await ApiService.postData(
      data,
      "/schedule/create-production"
    );
    return response.data;
  });
};

export const useWorkingTime = () => {
  return useMutation(async (data) => {
    const response = await ApiService.postData(
      {
        dateInit: "2023-05-16",
        dateInitHour: 19,
        dateEnd: "2023-05-17",
        dateEndHour: 7,
      },
      "/working-time/create-working-time"
    );
    return response.data.msg;
  });
};
