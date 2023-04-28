import { QueryFunction, useQuery } from "@tanstack/react-query";

const useService = ( label: string, fnAction: QueryFunction ) => {
    const serviceQuery = useQuery([label], fnAction);
    return serviceQuery;
}

export { useService };