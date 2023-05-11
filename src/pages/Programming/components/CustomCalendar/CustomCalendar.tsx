import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import esLocale from "@fullcalendar/core/locales/es";
import ModalContent from "../ModalContent/ModalContent";
import { Calendar, EventInput } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "../../../../components/display/Modal/Modal";

// Styles
import { CustomCalendarWrapper } from "./styles";

// helpers
import { getRangeDatesByViewType, getYear } from "./helpers";
import { useAllSchedules } from "../../../../hook/useSchedule";
import { COMPOSED_ROUTES } from "../../../../constants/routes";
import { getUserIsAdmin } from "../../../../helpers/getData/getUserIsAdmin";
// Icons

interface CustomCalendarProps {}

const MODAL_TITLE = "Programación";

const CustomCalendar: FC<CustomCalendarProps> = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dateSelected, setDateSelected] = useState<string | null>(null);
  const [schedules, setSchedules] = useState([]);
  const [schedulesModificated, setSchedulesModificated] = useState([]);
  const schedulesDb = useAllSchedules({ sort: "code", order: "-1" }, "2023-06");
  const calendarRef = useRef<HTMLDivElement>(null);
  const userIsAdmin = !getUserIsAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    let localSchedules = schedulesDb?.data?.data || [];
    localSchedules = localSchedules.map((schedule: any) => ({
      title: schedule.Customer,
      start: schedule.dateStart,
      end: schedule.dateEnd,
      id: schedule.code,
    }));
    setSchedules(localSchedules);
  }, [schedulesDb?.data]);

  const getHeaderToolbar = useCallback(() => {
    return userIsAdmin
      ? {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridDay",
        }
      : {
          left: "prev,next today",
          center: "title",
          right: "timeGridDay, dayGridMonth",
        };
  }, [userIsAdmin]);

  const getInitialViewByRole = useCallback(() => {
    return userIsAdmin ? "dayGridMonth" : "timeGridDay";
  }, [userIsAdmin]);

  const getDateFormatted = (type: string, date: Date) => {
    return getRangeDatesByViewType(type, date);
  };

  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        initialView: getInitialViewByRole(),
        // initialDate: currentDateComponent,
        events: schedules as EventInput[],
        locale: esLocale,
        firstDay: 0,
        selectable: true,
        headerToolbar: getHeaderToolbar(),
        eventClick: ({ event }) =>
          navigate(`${COMPOSED_ROUTES.SUMMARY_PROGRAMMING}/${event.id}`),
        displayEventEnd: true,
        dateClick: function (info) {
          setModalIsOpen(true);
          setDateSelected(info.dateStr);
        },
        editable: true,
        droppable: true,
        eventOverlap: (stillEvent: any, movingEvent: any) => {
          if (
            stillEvent.start < movingEvent.end &&
            stillEvent.end > movingEvent.start
          ) {
            return false;
          }
          return true;
        },
        eventDrop: (info: any) => {
          const eventFromSchedule = schedulesDb?.data?.data.find(
            (schedule: any) =>
              schedule.code.toString() === info.event.id.toString()
          );
          setSchedulesModificated((prev: any) => {
            if (eventFromSchedule) {
              return [...prev, eventFromSchedule];
            }
            return prev;
          });
        },
        slotEventOverlap: false,
        drop: (e) => console.log("evento cuando suelta el drop", e),
      });
      calendar.render();
    }
  }, [navigate, getInitialViewByRole, getHeaderToolbar, schedules]);

  return (
    <CustomCalendarWrapper ref={calendarRef}>
      <Modal
        open={modalIsOpen}
        title={MODAL_TITLE}
        handleClose={() => {
          setModalIsOpen(false);
        }}
        closeOutSideClick={true}
      >
        <ModalContent dateSelected={dateSelected} />
      </Modal>
    </CustomCalendarWrapper>
  );
};

export default CustomCalendar;
