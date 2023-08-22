export const getColorClassByValue = (number: number) => {
  if (number > 0) {
    return "green";
  }
  if (number < 0) {
    return "red";
  }
  return "";
};
