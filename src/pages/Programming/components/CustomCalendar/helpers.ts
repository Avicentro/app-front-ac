export const getYearAndMonthByDate = (dateString: string): string => {
  const date = new Date(dateString);
  const yearMonth = date.toISOString().slice(0, 7);
  return yearMonth;
};

export const getYearMonthAndDateByDate = (dateString: string): string => {
  const date = new Date(dateString);
  const yearMonthDay = date.toISOString().slice(0, 10);
  return yearMonthDay;
};
export const getRangeDatesByViewType = (type: string, date: Date) => {
  const dateSelected = date.toDateString();
  return (
    {
      dayGridMonth: getYearAndMonthByDate(dateSelected),
      timeGridWeek: getYearAndMonthByDate(dateSelected),
      timeGridDay: getYearMonthAndDateByDate(dateSelected),
    }[type] || "2023-06"
  );
};
