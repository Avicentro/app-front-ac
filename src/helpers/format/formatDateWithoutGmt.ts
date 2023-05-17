export const formatDateWithoutGmt = ({
  date,
  addHours,
}: {
  date: string;
  addHours?: boolean;
}) => {
  try {
    const dateObject = new Date(date);
    const userTimezoneOffset = dateObject.getTimezoneOffset() * 60000;
    const dateToFormat = new Date(dateObject.getTime() + userTimezoneOffset);
    return dateToFormat;
  } catch (error) {
    console.error(error);
    return "Dato no válido";
  }
};
