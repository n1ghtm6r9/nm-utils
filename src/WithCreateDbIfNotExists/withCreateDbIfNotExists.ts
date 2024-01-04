import type { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { EnvironmentEnum } from '@nmxjs/types';
import { getEnvironment } from '../GetEnvironment';

export const withCreateDbIfNotExists =
  (cb: TypeOrmModuleAsyncOptions['useFactory']) =>
  (...params) =>
    Promise.resolve(cb(...params)).then((options: any) =>
      getEnvironment() !== EnvironmentEnum.PRODUCTION && options.database
        ? new (require('typeorm').DataSource)({
            type: options.type,
            host: options.host,
            port: options.port,
            username: options.username,
            password: options.password,
          })
            .initialize()
            .then(ds =>
              ds
                .query(`CREATE DATABASE "${options.database}"`)
                .then(() => ds)
                .catch(() => ds),
            )
            .then(ds => ds.destroy())
            .then(() => options)
        : options,
    );
