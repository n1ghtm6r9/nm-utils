import { isObservable, firstValueFrom } from 'rxjs';
import { sleep } from '../Sleep';
import { IRetryCallOptions } from './interfaces';
import { Logger } from '@nestjs/common';

export async function retryCall<T>({
  handler,
  retryCount = Infinity,
  retryTime = 3000,
  logs = true,
  validateError,
}: IRetryCallOptions<T>): Promise<Awaited<ReturnType<typeof handler>>> {
  let currentCount = 0;
  let lastError;

  while (retryCount > currentCount) {
    currentCount++;

    try {
      const payload = handler();
      return <any>await (isObservable(payload) ? firstValueFrom(payload) : payload);
    } catch (error) {
      lastError = error;
      if (logs) {
        Logger.warn(`${error.message}, retry call after ${retryTime}ms`);
      }

      if (validateError && !validateError(error)) {
        break;
      }

      await sleep({ time: retryTime });
    }
  }

  throw lastError;
}
