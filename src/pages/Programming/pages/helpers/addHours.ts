export const addHours = (date: Date, hours: number) => {
  return new Date(date.setMinutes(date.getMinutes() + hours));
};
