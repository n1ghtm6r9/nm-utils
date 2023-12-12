import type { Observable } from 'rxjs';

export interface IWaitHandlerIntervalOptions {
  handler: () => Observable<boolean> | Promise<boolean> | boolean;
  time: number;
}
