import { defaultBootMode } from '@nmxjs/constants';

export const getBootMode = (env: any = process.env): string => env.BOOT_MODE || defaultBootMode;
