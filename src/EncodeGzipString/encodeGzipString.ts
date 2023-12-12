import { gzip } from 'zlib';
import { IEncodeGzipStringOptions } from './interfaces';

export const encodeGzipString = ({ data }: IEncodeGzipStringOptions) =>
  new Promise<string>((resolve, reject) => gzip(data, (err, buffer) => (err ? reject(err) : resolve(buffer.toString('base64')))));
