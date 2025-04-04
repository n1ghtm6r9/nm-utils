import { isObservable, firstValueFrom } from 'rxjs';
import { sleep } from '../Sleep';
import { IWaitHandlerIntervalOptions } from './interfaces';

export function waitHandlerInterval({ handler, time }: IWaitHandlerIntervalOptions) {
  let isStop = false;
  Promise.resolve().then(async () => {
    while (!isStop) {
      const payload = handler();
      const result = await (isObservable(payload) ? firstValueFrom(payload) : payload);

      if (!result) {
        break;
      }
      await sleep(time);
    }
  });
  return () => {
    isStop = true;
  };
}
