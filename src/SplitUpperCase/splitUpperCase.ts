export const splitUpperCase = (str: string) =>
  Array.from(str)
    .reduce((indexes: number[], letter, i) => {
      if (letter.toUpperCase() === letter) {
        indexes.push(i);
      }
      return indexes;
    }, [])
    .map((_, i, indexes) => str.slice(indexes[i], indexes[i + 1]));
