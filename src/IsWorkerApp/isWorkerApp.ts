import { defaultBootMode } from '@nmxjs/constants';

export const isWorkerApp = (env = process.env) => Boolean(env.BOOT_MODE && env.BOOT_MODE.toUpperCase() !== defaultBootMode);
