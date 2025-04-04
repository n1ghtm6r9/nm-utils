export const getNumberPrecision = (number: number) => number.toString().split('.')[1]?.length || 0;
