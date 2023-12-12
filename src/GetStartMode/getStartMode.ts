import * as path from 'path';
import { StartModeEnum } from '@nmxjs/types';

export function getStartMode(env: any = process.env): StartModeEnum {
  if (env.WATCH === 'true') {
    return StartModeEnum.WATCH;
  } else if (env.DEV === 'true' || path.basename(env._) === 'ts-node') {
    return StartModeEnum.DEV;
  }

  return StartModeEnum.NATIVE;
}
