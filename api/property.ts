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
  pageSize?: number;
  searchTerm?: string;
  minPrice?: number;
  maxPrice?: number;
  placeTypes?: number[];
  sortColumn?: string;
  sortOrder?: "asc" | "desc";
}

export function useGetplaces({
  page,
  pageSize,
  searchTerm,
  minPrice,
  maxPrice,
  placeTypes,
  sortColumn,
  sortOrder,
}: useGetPlacesParams = {}) {
  const queryParams = useMemo(() => {
    const params: Record<string, any> = {};

    if (page) params.page = page;
    if (pageSize) params.pageSize = pageSize;
    if (searchTerm) params.searchTerm = searchTerm;
    if (minPrice !== undefined) params.minPrice = minPrice;
    if (maxPrice !== undefined) params.maxPrice = maxPrice;
    if (placeTypes && placeTypes.length > 0) {
      params.placeTypes = placeTypes.join(","); // Ensure it's a comma-separated string
    }
    if (sortColumn) params.sortColumn = sortColumn;
    if (sortOrder) params.sortOrder = sortOrder;

    return params;
  }, [
    page,
    pageSize,
    searchTerm,
    minPrice,
    maxPrice,
    placeTypes,
    sortColumn,
    sortOrder,
  ]);

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
