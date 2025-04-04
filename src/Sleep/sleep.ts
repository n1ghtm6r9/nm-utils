export const sleep = (time = 50) => new Promise<void>(resolve => setTimeout(() => resolve(), time));
