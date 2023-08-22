export const ceilNumber = (number: number) => {
  const numberFormatted = Math.ceil(number);
  return isNaN(numberFormatted) ? 0 : numberFormatted;
};
