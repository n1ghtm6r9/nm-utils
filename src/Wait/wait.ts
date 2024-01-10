import { sleep } from '../Sleep';

export async function wait(callback: () => any) {
  let elem;
  while (true) {
    elem = callback();
    if (elem) {
      break;
    }
    await sleep({ time: 50 });
  }
  return elem;
}
