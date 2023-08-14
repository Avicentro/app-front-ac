export const getFormat = (dateSelected: any, cutHours?: boolean) => {
  const hourDate = new Date(dateSelected);

  const dayOfWeek = hourDate.getUTCDay();

  const monthDay = hourDate.getUTCDate();

  const month = hourDate.getUTCMonth();

  const year = hourDate.getUTCFullYear();

  const hour = hourDate.getHours();

  const minutes = hourDate.getMinutes();

  const textWeekDays = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const TextMonth = textWeekDays[dayOfWeek];

  const monthsText = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const monthText = monthsText[month];

  const date = `${TextMonth}, ${monthDay} de ${monthText} del ${year}`;
  const hours = `${hour}:${minutes}`;
  return cutHours ? date : `${date},${hours}`;
};
