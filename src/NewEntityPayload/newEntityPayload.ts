import { EntityDto } from '@nmxjs/types';
import { uuid } from '../Uuid';

export function newEntityPayload(): EntityDto {
  const time = Date.now();
  return {
    id: uuid(),
    updatedAt: time,
    createdAt: time,
  };
}
