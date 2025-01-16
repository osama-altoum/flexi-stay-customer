import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "./storage";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_API,
});

// Request interceptor to set the Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const flexiStaySmasher = async (
  args: string | [string, AxiosRequestConfig]
) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.delete(url, { ...config });

  return res.data;
};

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

// ----------------------------------------------------------------------

export const flexiStayCreator = async (
  args: string | [string, AxiosRequestConfig]
) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.post(url, config);
  return res.data;
};

// ----------------------------------------------------------------------

export const flexiStayCreatorPut = async (
  args: string | [string, AxiosRequestConfig]
) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.put(url, config);
  return res.data;
};

// ----------------------------------------------------------------------

export const flexiStayFetcher = async (
  args: string | [string, AxiosRequestConfig]
) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await axiosInstance?.get(url, { ...config });
  return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
  kanban: "/api/kanban",
  calendar: "/api/calendar",
  auth: {
    login: "/api/v1/auth/Login",
    register: "/api/v1/auth/Register",
  },

  property: {
    getAll: "api/v1/places",
    getPlaceDetails: "api/v1/places",
    getPlaceReservations: "api/v1/places/",
  },
  reservations: {
    setReservation: "api/v1/reservations",
  },
};
