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
import { CalendarContainer, CustomCalendarWrapper } from "./styles";

// helpers
import { getRangeDatesByViewType } from "./helpers";
import {
  useAllSchedules,
  useReProgrammingMutation,
  useWorkingTime,
} from "../../../../hook/useSchedule";
import { COMPOSED_ROUTES } from "../../../../constants/routes";
import { getUserIsAdmin } from "../../../../helpers/getData/getUserIsAdmin";
import Button from "../../../../components/form/Button/Button";
import ModalConfirmContent from "../ModalConfirmContent/ModalConfirmContent";
import {
  fieldTypeEnum,
  formConfigType,
  scheduleType,
  settingsValidationsStringType,
  typeType,
  typeValidationsType,
} from "../../../../models";
// Icons

interface CustomCalendarProps {}

const MODAL_TITLE = "Programación";
const MODAL_CONFIRM_TITLE = "Modificar programación";

const CustomCalendar: FC<CustomCalendarProps> = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalConfirmIsOpen, setModalConfirmIsOpen] = useState(false);
  const [loginModificateProgramming, setLoginModificateProgramming] =
    useState(false);
  const [dateSelected, setDateSelected] = useState<string | null>(null);
  const [schedules, setSchedules] = useState([]);
  const [schedulesModificated, setSchedulesModificated] = useState([]);
  const schedulesDb = useAllSchedules({ sort: "code", order: "-1" }, "2023");
  const calendarRef = useRef<HTMLDivElement>(null);
  const userIsAdmin = getUserIsAdmin();
  const reProgrammingMutation = useReProgrammingMutation();
  const workingTime = useWorkingTime();
  const navigate = useNavigate();

  useEffect(() => {
    let localSchedules = schedulesDb?.data?.data || [];
    localSchedules = localSchedules.map((schedule: any) => ({
      title: schedule.Customer?.name,
      start: schedule.dateStart,
      end: schedule.dateEnd,
      id: schedule.code,
    }));
    setSchedules(localSchedules);
  }, [schedulesDb?.data?.data]);

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
          right: "dayGridMonth,timeGridDay",
        };
  }, [userIsAdmin]);

  const getInitialViewByRole = useCallback(() => {
    return userIsAdmin ? "dayGridMonth" : "timeGridDay";
  }, [userIsAdmin]);

  const saveReProgramming = async (formData: any) => {
    setLoginModificateProgramming(true);
    try {
      const schedulesWithDriver = schedulesModificated.map((schedule: any) => {
        if (formData[schedule.code.toString()]) {
          const {
            __v,
            _id,
            user,
            type,
            status,
            qr,
            nit,
            codeWorkingTime,
            supplier,
            Customer,
            SubCustomer,
            idCustomer,
            idSubCustomer,
            ...props
          } = schedule;
          console.log("schedule", schedule);
          return {
            ...props,
            driver: formData[schedule.code],
            remarks: "",
            typeSchedule: type,
            supplier: supplier._id,
            Customer: idCustomer,
            SubCustomer: idSubCustomer,
          }; // tener en cuenta ese typeSchedule, debe ser el mismo cuando llega
        }
        return schedule;
      });
      const saveResponse = await reProgrammingMutation.mutateAsync(
        schedulesWithDriver as any
      );
      console.log("saveResponse", saveResponse);
    } catch (error) {
      console.error(error);
    } finally {
      setLoginModificateProgramming(false);
      setModalConfirmIsOpen(false);
      setSchedulesModificated([]);
    }
  };

  const getFormConfigSchedules = (): formConfigType[] => {
    return schedulesModificated.map((schedule: scheduleType) => ({
      name: schedule.code.toString(),
      label: `codigo: ${schedule.code} cliente: ${schedule.Customer}`,
      value: "",
      type: "text" as typeType,
      fieldType: fieldTypeEnum.select,
      placeholder: `codigo: ${schedule.code} cliente: ${schedule.Customer}`,
      validation: {
        type: "string" as typeValidationsType,
        settings: [
          {
            type: "required" as settingsValidationsStringType,
          },
        ],
      },
      options: [],
    }));
  };

  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        initialView: getInitialViewByRole(),
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
          eventFromSchedule["dateStart"] = info.event.startStr
            .slice(0, 19)
            .replace("T", " ");
          eventFromSchedule["dateEnd"] = info.event.endStr
            .slice(0, 19)
            .replace("T", " ");
          setSchedulesModificated((prev: any) => {
            if (eventFromSchedule) {
              let scheduleCleaned = [...prev, eventFromSchedule];
              scheduleCleaned = Object.values(
                scheduleCleaned.reduce((acc, curr) => {
                  acc[curr.code] = curr;
                  return acc;
                }, {})
              );
              return scheduleCleaned;
            }
            return prev;
          });
        },
        slotEventOverlap: false,
      });
      calendar.render();
    }
  }, [navigate, getInitialViewByRole, getHeaderToolbar, schedules]);

  return (
    <CalendarContainer>
      {schedulesModificated.length > 0 && (
        <div className="button-modify-container">
          <Button extraProps={{ onClick: () => setModalConfirmIsOpen(true) }}>
            Modificar programación
          </Button>
        </div>
      )}
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
        <Modal
          open={modalConfirmIsOpen}
          title={MODAL_CONFIRM_TITLE}
          handleClose={() => {
            setModalConfirmIsOpen(false);
          }}
          closeOutSideClick={true}
        >
          <ModalConfirmContent
            handleClick={saveReProgramming}
            loading={loginModificateProgramming}
            formConfig={getFormConfigSchedules()}
          />
        </Modal>
      </CustomCalendarWrapper>
    </CalendarContainer>
  );
};

export default CustomCalendar;
