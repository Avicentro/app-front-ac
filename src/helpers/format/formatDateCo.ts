export const formatDateCo = ({
  date,
  addHours,
}: {
  date: string | Date;
  addHours?: boolean;
}) => {
  try {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: addHours ? "short" : undefined,
      hour: addHours ? "numeric" : undefined,
      minute: addHours ? "numeric" : undefined,
      second: addHours ? "numeric" : undefined,
    } as const;
    const dateObject = new Date(date);
    const userTimezoneOffset = dateObject.getTimezoneOffset() * 60000;
    const dateToFormat = new Date(dateObject.getTime() + userTimezoneOffset);
    return new Intl.DateTimeFormat("es-Co", options).format(dateToFormat);
  } catch (error) {
    return "Dato no válido";
  }
};
