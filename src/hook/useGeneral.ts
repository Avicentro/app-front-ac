import { useQuery } from "@tanstack/react-query";
import ApiService from "../core/newApi.services";
import {
  getReactQueryType,
  paginateGetQueryType,
  generalPaginateParamsType,
} from "../models";

export const useGetPaginateData = ({
  page,
  perPage,
  sortBy,
  sortOrder,
  url,
}: generalPaginateParamsType) =>
  useQuery<getReactQueryType<paginateGetQueryType>>({
    queryKey: [`paginate-table-${url}`, page],
    queryFn: async () => {
      const response = await ApiService.getData(
        {
          page,
          perPage,
          sortBy,
          sortOrder,
        },
        url
      );
      const data = response?.data;
      const paging = {
        page: data?.page,
        perPage: data?.perPage,
        totalRecords: data?.totalRecords,
        totalPages: data?.totalPages,
        hasNextPage: data?.hasNextPage,
      };
      const { items } = data;
      return { ...response, paging, data: { items, paging } };
    },
    retry: true,
  });
