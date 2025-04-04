import * as YAML from 'yaml';

export const yamlToObj = <T>(yaml: string): T => YAML.parse(yaml);
