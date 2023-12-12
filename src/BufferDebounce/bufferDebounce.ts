import { debounceTime, Observable, OperatorFunction, buffer } from 'rxjs';

export const bufferDebounce: <T>(debounce: number) => OperatorFunction<T, T[]> = (debounce) => (source) =>
  new Observable((observer) =>
    source.pipe(buffer(source.pipe(debounceTime(debounce)))).subscribe({
      next(x) {
        observer.next(x);
      },
      error(err) {
        observer.error(err);
      },
      complete() {
        observer.complete();
      },
    }),
  );
