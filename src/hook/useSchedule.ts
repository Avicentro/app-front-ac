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

export const useAllSchedules = (
  data: useAllSchedulesProps,
  date: string,
  dependency?: any
) => {
  return useQuery({
    queryKey: ["allSchedules", dependency],
    queryFn: async () =>
      await ApiService.getData(data, `/schedule/all/${date}`),
    retry: false,
    onError: () => {
      return {
        data: {
          data: [],
          isSuccess: false,
          isError: true,
        },
      };
    },
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

export const useReProgrammingMutation = () => {
  return useMutation(async (data) => {
    const response = await ApiService.patchData(
      { data: data },
      "/programming/rescheduling"
    );
    return response.data;
  });
};

export const useWorkingTime = () => {
  return useMutation(async (data) => {
    const response = await ApiService.postData(
      {
        dateInit: "2023-05-11",
        dateInitHour: 19,
        dateEnd: "2023-05-12",
        dateEndHour: 7,
      },
      "/working-time/create-working-time"
    );
    return response.data.msg;
  });
};

export const useAllDriver = (data: any, url: any) => {
  const response = useQuery({
    queryKey: ["allDrivers"],
    queryFn: async () => await ApiService.getData(data, "/customer/driver"),
    retry: false,
    onError: () => {
      return {
        data: {
          data: [],
          isSuccess: false,
          isError: true,
        },
      };
    },
  });
  return response?.data?.data || [];
};

export const useAnyByUrl = (
  data: any,
  url: any,
  enabled: boolean,
  key: string
) => {
  const response = useQuery({
    queryKey: ["key"],
    queryFn: async () => await ApiService.getData(data, url),
    retry: false,
    onError: () => {
      return {
        data: {
          data: [],
          isSuccess: false,
          isError: true,
        },
      };
    },
    enabled,
  });
  return response?.data || [];
};
