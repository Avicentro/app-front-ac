import { formatDateCo } from "../../../../../helpers/format/formatDateCo";

export const getAvailableSchedulesList = (availableSchedules: string[]) => {
  return [
    { label: "Seleccione", value: "" },
    ...availableSchedules.map((schedule) => ({
      label: formatDateCo({ date: schedule, addHours: true }),
      value: schedule,
    })),
  ];
};
