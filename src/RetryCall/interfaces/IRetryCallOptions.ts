export interface IRetryCallOptions<T> {
  handler: () => T;
  retryTime?: number;
  retryCount?: number;
  logs?: boolean;
  validateError?: (error) => boolean;
}
