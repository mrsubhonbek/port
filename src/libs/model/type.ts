/* eslint-disable @typescript-eslint/no-explicit-any */
export type ErrorResponse = {
  data: any;
  status: number;
  statusText: string;
  message?: string;
};