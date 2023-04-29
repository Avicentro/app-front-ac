export const formatDateCo = ({
  date,
  addHours,
}: {
  date: string;
  addHours?: boolean;
}) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: addHours ? "numeric" : undefined,
    minute: addHours ? "numeric" : undefined,
    second: addHours ? "numeric" : undefined,
  } as const;
  const dateObject = new Date(date);
  const userTimezoneOffset = dateObject.getTimezoneOffset() * 60000;
  const dateToFormat = new Date(dateObject.getTime() + userTimezoneOffset);
  return new Intl.DateTimeFormat("es-Co", options).format(dateToFormat);
};
