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
import { getRangeDatesByViewType } from "./helpers";
import { useAllSchedules } from "../../../../hook/useSchedule";
import { COMPOSED_ROUTES } from "../../../../constants/routes";
import { getUserIsAdmin } from "../../../../helpers/getData/getUserIsAdmin";
// Icons

import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface CustomCalendarProps {}

const MODAL_TITLE = "Programación";

function renderEventContent(eventInfo: any) {
  console.log("eventInfo", eventInfo.event.title);
  return <EventContent event={eventInfo.event} />;
}

const CustomCalendar: FC<CustomCalendarProps> = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [schedules, setSchedules] = useState<any>({});
  const [dateSelected, setDateSelected] = useState<string | null>(null);
  const [dateInView, setDateInView] = useState<string>("");
  const schedules = useAllSchedules(
    { sort: "code", order: "-1" },
    dateInView,
    dateInView
  );
  const [currentDateComponent, setCurrentDateComponent] = useState<Date>(
    new Date()
  );
  const calendarRef = useRef<HTMLDivElement>(null);
  const userIsAdmin = getUserIsAdmin();
  const navigate = useNavigate();

  const getEvents = useCallback(() => {
    return schedules?.data?.data?.map((schedule: any) => ({
      title: schedule.Customer,
      start: schedule.dateStart,
      end: schedule.end,
      id: schedule.code,
    }));
  }, [schedules.data]);

  const getHeaderToolbar = useCallback(() => {
    return userIsAdmin
      ? {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridDay",
        }
      : {
          center: "title",
          right: "timeGridDay",
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
        initialDate: currentDateComponent,
        events: getEvents() as EventInput[],
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
          console.log(
            "stillEvent",
            stillEvent.start < movingEvent.end &&
              stillEvent.end > movingEvent.start
          );
          return true;
        },
        // eventDrop: function (info) {
        //   console.log(
        //     "Evento " +
        //       info.event.title +
        //       " fue arrastrado desde " +
        //       info.oldEvent.start +
        //       " hasta " +
        //       info.event.start
        //   );
        // },
        slotEventOverlap: false,
        drop: (e) => console.log("evento cuando suelta el drop", e),
        viewDidMount: (e) => {
          console.log("e", e);
          setDateInView(getDateFormatted(e.view.type, e.view.currentStart));
        },
        datesSet: (e) => {
          const newDate = e.view.currentStart;
          setCurrentDateComponent(newDate);
          setDateInView(getDateFormatted(e.view.type, newDate));
        },
      });
      calendar.render();
    }
  }, [getEvents, navigate, getInitialViewByRole, getHeaderToolbar]);

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
