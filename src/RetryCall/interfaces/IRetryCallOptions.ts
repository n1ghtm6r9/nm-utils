export interface IRetryCallOptions<T> {
  handler: () => T;
  retryTime?: number;
  retryCount?: number;
}
