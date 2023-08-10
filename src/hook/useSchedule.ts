import { useQuery, useMutation } from "@tanstack/react-query";
import ApiService from "../core/newApi.services";

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

export const useScheduling = (orderId: string) => {
  const response = useQuery({
    queryKey: ["scheduling"],
    queryFn: async () =>
      await ApiService.getData({}, `/programming/find/${orderId}`),
    retry: false,
  });
  const isLoading = response.isLoading;
  const refetch = response.refetch;
  return { data: response?.data?.data, isLoading, refetch };
};

export const useAllCustomers = () => {
  return useQuery({
    queryKey: ["allCustomers"],
    queryFn: async () => await ApiService.getData({}, "/people/all"),
    retry: false,
  });
};

export const useAllSchedules = (data: any, date: string, dependency?: any) => {
  return useQuery({
    queryKey: ["allSchedules", dependency],
    queryFn: async () => await ApiService.getData(data, `/programing/all`),
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
    const response = await ApiService.postData(data, "/programing");
    return response.data;
  });
};

export const useSaveRestScheduleData = () => {
  return useMutation(async (data) => {
    const response = await ApiService.postData(
      data,
      "/schedule/create-production"
    );
    return response.data;
  });
};

export const useReProgrammingMutation = () => {
  return useMutation(async (data: any) => {
    const response = await ApiService.putData(
      { data: data },
      `/programming/${data[0]._id}`
    );
    return response.data;
  });
};

export const useWorkingTime = () => {
  return useMutation(async (data) => {
    const response = await ApiService.postData(
      {
        dateInit: "2023-05-17",
        dateInitHour: 19,
        dateEnd: "2023-05-18",
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
  const isLoading = response.isLoading;
  return { isLoading, data: response };
};

//DELETE
export const useDeleteScheduleMutate = () => {
  return useMutation(async (id) => {
    const response = await ApiService.deleteData(`/schedule/delete/${id}`);
    return response;
  });
};
