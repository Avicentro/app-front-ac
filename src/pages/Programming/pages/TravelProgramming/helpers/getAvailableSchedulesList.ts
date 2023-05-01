export const getAvailableSchedulesList = (availableSchedules: string[]) => {
  return [
    { label: "Seleccione", value: "" },
    ...availableSchedules.map((schedule) => ({
      label: schedule,
      // label: formatDateCo({ date: schedule, addHours: true }),
      value: schedule,
    })),
  ];
};
