import useSWR, { mutate } from "swr";
import { useMemo } from "react";
import { flexiStayCreator, endpoints } from "./axios";

export function login(body: any) {
  const URL = endpoints.auth.login;
  const response = flexiStayCreator([URL, body]);
  return response;
}

export function register(body: any) {
  const URL = endpoints.auth.register;
  const response = flexiStayCreator([URL, body]);
  return response;
}
