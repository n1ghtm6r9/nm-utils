import { IGetComboCountOptions } from './interfaces';

export function getComboCount<T>({ data, filterCallback }: IGetComboCountOptions<T>): number {
  let maxCombo = 0;
  let currentCombo = 0;

  for (const value of data) {
    const result = filterCallback(value);

    if (result) {
      currentCombo++;
    }

    if (currentCombo > maxCombo) {
      maxCombo = currentCombo;
    }

    if (!result) {
      currentCombo = 0;
    }
  }

  return maxCombo;
}
