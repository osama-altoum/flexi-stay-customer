import { endpoints, flexiStayCreator } from "./axios";

export function CreateReservation(body: any) {
  const URL = endpoints.reservations.setReservation;
  const response = flexiStayCreator([URL, body]);
  return response;
}
