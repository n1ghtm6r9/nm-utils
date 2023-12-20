import { randomInt } from 'crypto';

const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';

export const generateSeed = (size: number = 32) =>
  Array(size)
    .fill(undefined)
    .map(() => charset.charAt(randomInt(0, charset.length)))
    .join('');
