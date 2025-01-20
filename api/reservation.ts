import { endpoints, stayWayCreator } from "./axios";

export function CreateReservation(body: any) {
  const URL = endpoints.reservations.setReservation;
  const response = stayWayCreator([URL, body]);
  return response;
}
