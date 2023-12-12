export const numberToString = (number: number) =>
  number
    .toString()
    .replace(/(-?)(\d*)\.?(\d*)e([+-]\d+)/, (_, b, c, d, e) =>
      e < 0 ? b + '0.' + Array(1 - e - c.length).join('0') + c + d : b + c + d + Array(e - d.length + 1).join('0')
    );
