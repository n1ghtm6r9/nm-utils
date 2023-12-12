import { ISleepOptions } from './interfaces';

export const sleep = ({ time = 50 }: ISleepOptions = {}) => new Promise<void>(resolve => setTimeout(() => resolve(), time));
