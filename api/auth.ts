import useSWR, { mutate } from "swr";
import { useMemo } from "react";
import { stayWayCreator, endpoints } from "./axios";

export function login(body: any) {
  const URL = endpoints.auth.login;
  const response = stayWayCreator([URL, body]);
  return response;
}

export function register(body: any) {
  const URL = endpoints.auth.register;
  const response = stayWayCreator([URL, body]);
  return response;
}
