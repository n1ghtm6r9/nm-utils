import * as YAML from 'yaml';
import { IYamlToObjOptions } from './interfaces';

export const yamlToObj = <T>({ yaml }: IYamlToObjOptions): T => YAML.parse(yaml);
