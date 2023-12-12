import { gunzip } from 'zlib';
import { IDecodeGzipStringOptions } from './interfaces';

export const decodeGzipString = ({ data }: IDecodeGzipStringOptions) =>
  new Promise<string>((resolve, reject) =>
    gunzip(Buffer.from(data, 'base64'), (err, buffer) => (err ? reject(err) : resolve(buffer.toString('utf-8'))))
  );
