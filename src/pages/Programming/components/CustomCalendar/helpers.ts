export const getYear = (dateString: string): string => {
  const date = new Date(dateString);
  const yearMonth = date.toISOString().slice(0, 4);
  return yearMonth;
};
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
export const getYearMonthDateHourByDate = (dateString: string): string => {
  const date = new Date(dateString);
  const yearMonthDay = date.toISOString().slice(0, 19).replace("T", " ");
  return yearMonthDay;
};
export const getRangeDatesByViewType = (type: string, date: Date) => {
  const dateSelected = date.toDateString();
  return (
    {
      dayGridMonth: getYearAndMonthByDate(dateSelected),
      timeGridWeek: getYearAndMonthByDate(dateSelected),
      timeGridDay: getYearMonthAndDateByDate(dateSelected),
      allTime: getYearMonthDateHourByDate(dateSelected),
    }[type] || "2023-06"
  );
};

export const getLabelByType = (schedule: {
  typeRest: string;
  type: string;
  customer: { name: string; id: string };
}) => {
  return {
    rest: `Descanso - ${schedule.typeRest}`,
    travel: `${schedule.customer ===  null ? 'Cliente eliminado del sistema' : schedule.customer.name}`,
  }[schedule.type];
};
