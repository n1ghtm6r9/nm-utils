import { gzip } from 'zlib';

export const encodeGzipString = (data: string) =>
  new Promise<string>((resolve, reject) => gzip(data, (err, buffer) => (err ? reject(err) : resolve(buffer.toString('base64')))));
