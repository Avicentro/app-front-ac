import { useQuery, useMutation } from "@tanstack/react-query";
import ApiService from "../core/newApi.services";

// GET
export const useAllLogbook = ({ enabled }: { enabled: boolean }) => {
  return useQuery({
    queryKey: ["allLogbook"],
    queryFn: async () =>
      await ApiService.getData({}, "/programing/logbook/all"),
    retry: true,
    enabled,
  });
};

export const useSearchLogbookByQuery = ({
  query,
  enabled,
}: {
  query: string;
  enabled: boolean;
}) => {
  return useQuery({
    queryKey: ["searchLogbookByQuery"],
    queryFn: async () =>
      await ApiService.getData({ query: query }, "/programing/logbook/search"),
    retry: true,
    enabled: enabled,
  });
};

export const useSearchLogbookByDate = ({
  data,
  enabled,
}: {
  data: string;
  enabled: boolean;
}) => {
  return useQuery({
    queryKey: ["searchLogbookByDate"],
    queryFn: async () =>
      await ApiService.getData({}, `/programing/logbook/date/${data}`),
    retry: false,
    enabled: enabled,
  });
};

// POST
export const useCreateLogbook = () => {
  return useMutation(async (data: any) => {
    const response = await ApiService.postData(data, "/programing/logbook");
    return response.data;
  });
};
