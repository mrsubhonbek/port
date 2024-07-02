/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ErrorResponse } from "./model/type";
export const errorCheck = (error: any): error is ErrorResponse => {
  return "data" in error && "status" in error && "statusText" in error;
};