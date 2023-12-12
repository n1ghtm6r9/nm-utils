export interface IGetComboCountOptions<T = any> {
  data: T[];
  filterCallback: (value: T) => boolean;
}
