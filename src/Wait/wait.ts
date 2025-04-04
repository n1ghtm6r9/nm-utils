import { sleep } from '../Sleep';

export async function wait(callback: () => any) {
  while (true) {
    if (callback()) {
      break;
    }
    await sleep(50);
  }
}
