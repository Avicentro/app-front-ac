import { useQuery } from "@tanstack/react-query";
import ApiService from "../core/api.services";

export const useOrderEntry = (idOrderEntry: any) => {
  const response = useQuery({
    queryKey: ["orderEntry"],
    queryFn: async () =>
      await ApiService.getData({}, `/order-entry/find/${idOrderEntry}`),
    retry: false,
    onError: () => {
      return {
        data: {
          data: {},
          isSuccess: false,
          isError: true,
        },
      };
    },
  });
  return response?.data || [];
};
