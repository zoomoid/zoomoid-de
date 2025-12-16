export const leadingZeroes = (i: number, digits = 1): string => {
  if (i < digits * 10) {
    return "0" + i;
  }
  return i.toString();
};
