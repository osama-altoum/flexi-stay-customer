import useSWR, { mutate } from "swr";
import { useMemo } from "react";
import {
  stayWayCreator,
  stayWayFetcher,
  stayWaySmasher,
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
}: any = {}) {
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
    stayWayFetcher,
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
      totalPages: data?.count || 0,
    };
  }, [data?.data, data?.count, error, isLoading, isValidating]);

  return {
    ...memoizedValue,
    revalidatePropertyList,
  };
}

export function useGetPlaceDetails({ placeId }: any = {}) {
  const fullUrl = useMemo(
    () => `${endpoints.property.getPlaceDetails}/${placeId}`,
    [placeId]
  );

  const { data, error, isLoading, isValidating } = useSWR(
    fullUrl,
    stayWayFetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const revalidatePropertyDetails = () => {
    mutate(fullUrl);
  };

  // Memoize the return value for performance
  const memoizedValue = useMemo(() => {
    const propertyDetailsData = data?.data || [];
    return {
      propertyDetails: propertyDetailsData,
      propertyDetailsLoading: isLoading,
      propertyDetailsError: error,
      propertyDetailsValidating: isValidating,
      propertyDetailsEmpty: propertyDetailsData.length === 0,
    };
  }, [data?.data, error, isLoading, isValidating]);

  return {
    ...memoizedValue,
    revalidatePropertyDetails,
  };
}

export function useGetPlaceReservation({ placeId }: any = {}) {
  const fullUrl = useMemo(
    () => `${endpoints.property.getPlaceReservations}/${placeId}/reservations`,
    [placeId]
  );

  const { data, error, isLoading, isValidating } = useSWR(
    fullUrl,
    stayWayFetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const revalidateReservations = () => {
    mutate(fullUrl);
  };

  // Memoize the return value for performance
  const memoizedValue = useMemo(() => {
    const reservationsData = data?.data || [];
    return {
      reservations: reservationsData,
      reservationsLoading: isLoading,
      reservationsError: error,
      reservationsValidating: isValidating,
      reservationsEmpty: reservationsData.length === 0,
    };
  }, [data?.data, error, isLoading, isValidating]);

  return {
    ...memoizedValue,
    revalidateReservations,
  };
}
