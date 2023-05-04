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
import EventContent from "./components/EventContent/EventContent";

// Styles
import { CustomCalendarWrapper } from "./styles";

// helpers
import { useAllSchedules } from "../../../../hook/useSchedule";
import { COMPOSED_ROUTES } from "../../../../constants/routes";
import { getUserIsAdmin } from "../../../../helpers/getData/getUserIsAdmin";
// Icons

interface CustomCalendarProps {}

const MODAL_TITLE = "Programación";

function renderEventContent(eventInfo: any) {
  console.log("eventInfo", eventInfo.event.title);
  return <EventContent event={eventInfo.event} />;
}

const CustomCalendar: FC<CustomCalendarProps> = () => {
  const schedules = useAllSchedules({ sort: "code", order: "-1" }, "2023-06");
  const calendarRef = useRef<HTMLDivElement>(null);
  const userIsAdmin = getUserIsAdmin();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dateSelected, setDateSelected] = useState<string | null>(null);

  const getEvents = useCallback(() => {
    return schedules?.data?.data?.map((schedule: any) => ({
      title: schedule.Customer,
      start: schedule.dateStart,
      end: schedule.end,
      id: schedule.code,
    }));
  }, [schedules.data]);

  const headerToolbar = userIsAdmin
    ? {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }
    : {
        center: "title",
        right: "timeGridDay",
      };

  const getInitialViewByRole = () => {
    return userIsAdmin ? "dayGridMonth" : "timeGridDay";
  };

  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        initialView: getInitialViewByRole(),
        events: getEvents() as EventInput[],
        locale: esLocale,
        firstDay: 0,
        selectable: true,
        headerToolbar: headerToolbar,
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
          console.log(
            "stillEvent",
            stillEvent.start < movingEvent.end &&
              stillEvent.end > movingEvent.start
          );
          return true;
        },
        eventDrop: function (info) {
          console.log(
            "Evento " +
              info.event.title +
              " fue arrastrado desde " +
              info.oldEvent.start +
              " hasta " +
              info.event.start
          );
        },
        slotEventOverlap: false,
        drop: (e) => console.log("evento cuando suelta el drop", e),
      });
      calendar.render();
    }
  }, [getEvents, navigate, getInitialViewByRole, headerToolbar]);

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
