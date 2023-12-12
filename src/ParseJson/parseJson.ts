import { IParseJsonOptions } from './interfaces';

export function parseJson<T = any>({ data, arrayValid = false }: IParseJsonOptions): T | null {
  try {
    const jsonData = JSON.parse(data);

    if (Array.isArray(jsonData) && !arrayValid) {
      return null;
    }

    return jsonData;
  } catch {
    return null;
  }
}
