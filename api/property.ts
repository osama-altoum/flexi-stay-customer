import useSWR, { mutate } from "swr";
import { useMemo } from "react";
import {
  flexiStayCreator,
  flexiStayFetcher,
  flexiStaySmasher,
  endpoints,
} from "./axios";

// --------------------------- Place ------------------------ //

interface useGetPlacesParams {
  page?: number;
  limit?: number;
}

export function useGetplaces({ limit, page }: useGetPlacesParams = {}) {
  const queryParams = useMemo(() => {
    const params: Record<string, any> = {};
    if (page) params.page = page;
    if (limit) params.limit = limit;

    return params;
  }, [limit, page]);

  const fullUrl = useMemo(
    () => `${endpoints.property.getAll}?${new URLSearchParams(queryParams)}`,
    [queryParams]
  );

  const { data, error, isLoading, isValidating } = useSWR(
    fullUrl,
    flexiStayFetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const revalidatePropertyList = () => {
    mutate(fullUrl);
  };

  // Memoize the return value for performance
  const memoizedValue = useMemo(() => {
    const propertyData = data?.data || [];
    return {
      propertyList: propertyData,
      propertyLoading: isLoading,
      propertyError: error,
      propertyValidating: isValidating,
      propertyEmpty: propertyData.length === 0,
      totalPages: data?.total || 0,
    };
  }, [data?.data, data?.total, error, isLoading, isValidating]);

  return {
    ...memoizedValue,
    revalidatePropertyList,
  };
}
