import { gunzip } from 'zlib';

export const decodeGzipString = (data: string) =>
  new Promise<string>((resolve, reject) =>
    gunzip(Buffer.from(data, 'base64'), (err, buffer) => (err ? reject(err) : resolve(buffer.toString('utf-8'))))
  );
