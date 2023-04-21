import { FC, useEffect, useRef } from "react";

// Components
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";
import { Calendar, EventInput } from "@fullcalendar/core";
// Styles
import { CustomCalendarWrapper } from "./styles";

// helpers

interface CustomCalendarProps {}

const CustomCalendar: FC<CustomCalendarProps> = () => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        initialView: "dayGridMonth",
        events: [] as EventInput[],
        locale: esLocale,
        firstDay: 0,
      });
      calendar.render();
    }
  }, []);

  return <CustomCalendarWrapper ref={calendarRef}></CustomCalendarWrapper>;
};

export default CustomCalendar;
