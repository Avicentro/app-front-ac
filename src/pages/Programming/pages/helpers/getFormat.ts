export const getFormat = (dateSelected: any) => {
  const daysOfWeek = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];
  const dayOfWeekIndex = new Date(dateSelected).getDay();
  return `${dateSelected} ${daysOfWeek[dayOfWeekIndex]}`;
};
