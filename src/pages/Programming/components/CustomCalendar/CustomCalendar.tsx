import { FC, useEffect, useRef, useState } from "react";

// Components
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";
import { Calendar, EventInput } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";

// Styles
import { CustomCalendarWrapper } from "./styles";
import Modal from "../../../../components/display/Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";

// helpers

// Icons

interface CustomCalendarProps {}

const MODAL_TITLE = "Programación";

const CustomCalendar: FC<CustomCalendarProps> = () => {
  const calendarRef = useRef<HTMLDivElement>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dateSelected, setDateSelected] = useState<string | null>(null);

  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        events: [] as EventInput[],
        locale: esLocale,
        firstDay: 0,
        selectable: true,
        eventClick: () => console.log("algo"),
        dateClick: function (info) {
          setModalIsOpen(true);
          setDateSelected(info.dateStr);
        },
      });
      calendar.render();
    }
  }, []);

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
