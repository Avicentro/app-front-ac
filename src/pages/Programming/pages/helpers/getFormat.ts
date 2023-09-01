export const addZeroWhenHaveOneDigit = (digit: number) => {
  const digitStr = digit.toString();
  return digitStr.length > 1 ? digitStr : `0${digitStr}`;
};

export const getFormat = (dateSelected: any, cutHours?: boolean) => {
  console.log("dateSelected", dateSelected);
  const hourDate = new Date(dateSelected);

  const dayOfWeek = hourDate.getUTCDay();

  const monthDay = hourDate.getUTCDate();

  const month = hourDate.getUTCMonth();

  const year = hourDate.getUTCFullYear();

  const hour = hourDate.getHours();

  const minutes = hourDate.getMinutes();

  const textWeekDays = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];
  const TextDay = textWeekDays[dayOfWeek];

  const monthsText = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];
  const monthText = monthsText[month];

  const date = `${year}-${monthText}-${monthDay} ${TextDay}`;
  const hours = `${addZeroWhenHaveOneDigit(hour)}:${addZeroWhenHaveOneDigit(
    minutes
  )}`;
  return cutHours ? date : `${date} ${hours}`;
};
