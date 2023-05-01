import { useQuery, useMutation } from "@tanstack/react-query";
import ApiService from "../core/api.services";

// Models
import { useAllSchedulesProps } from "./models";

// GET
export const useAvailableSchedules = (data: any) => {
  return useQuery({
    queryKey: ["availableSchedules"],
    queryFn: async () =>
      await ApiService.getData(data, "/schedule/get-schedules-available"),
    retry: false,
  });
};

export const useScheduling = (orderId: string, data: any) => {
  return useQuery({
    queryKey: ["scheduling"],
    queryFn: async () =>
      await ApiService.getData({}, `/schedule/find/${orderId}`),
    retry: false,
    enabled: !data,
  });
};

export const useAllCustomers = () => {
  return useQuery({
    queryKey: ["allCustomers"],
    queryFn: async () => await ApiService.getData({}, "/customer/all"),
    retry: false,
  });
};

export const useAllSchedules = (data: useAllSchedulesProps, date: string) => {
  return useQuery({
    queryKey: ["allSchedules"],
    queryFn: async () =>
      await ApiService.getData(data, `/schedule/all/${date}`),
    retry: false,
  });
};

// POST

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
        dateInit: "2023-06-06",
        dateInitHour: 19,
        dateEnd: "2023-06-07",
        dateEndHour: 7,
      },
      "/working-time/create-working-time"
    );
    return response.data.msg;
  });
};
