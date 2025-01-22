import { useMemo } from "react";
import { endpoints, stayWayCreator, stayWayFetcher } from "./axios";
import useSWR, { mutate } from "swr";

export function CreateReservation(body: any) {
  const URL = endpoints.reservations.setReservation;
  const response = stayWayCreator([URL, body]);
  return response;
}

export function useGetReservations({ page }: any = {}) {
  const queryParams = useMemo(() => {
    const params: Record<string, any> = {};

    if (page) params.page = page;

    return params;
  }, [page]);

  const fullUrl = useMemo(
    () =>
      `${endpoints.reservations.getReservation}?${new URLSearchParams(
        queryParams
      )}`,
    [queryParams]
  );

  const { data, error, isLoading, isValidating } = useSWR(
    fullUrl,
    stayWayFetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const revalidateReservationsList = () => {
    mutate(fullUrl);
  };

  // Memoize the return value for performance
  const memoizedValue = useMemo(() => {
    const reservationsData = data?.data || [];
    return {
      reservationsList: reservationsData,
      reservationsLoading: isLoading,
      reservationsError: error,
      reservationsValidating: isValidating,
      reservationsEmpty: reservationsData.length === 0,
      totalPages: data?.count || 0,
    };
  }, [data?.data, data?.count, error, isLoading, isValidating]);

  return {
    ...memoizedValue,
    revalidateReservationsList,
  };
}
