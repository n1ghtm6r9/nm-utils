import crypto from 'crypto';
import { IGetHashOptions } from './interfaces';

export const getHash = ({ value, algo = 'sha256' }: IGetHashOptions) => crypto.createHash(algo).update(value).digest('hex');
