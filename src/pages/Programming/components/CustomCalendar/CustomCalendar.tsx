import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import {
  useAllSchedules,
  useReProgrammingMutation,
} from "../../../../hook/useSchedule";
import { COMPOSED_ROUTES } from "../../../../constants/routes";
import Button from "../../../../components/form/Button/Button";
import ModalConfirmContent from "../ModalConfirmContent/ModalConfirmContent";
import {
  fieldTypeEnum,
  formConfigType,
  scheduleType,
  settingsValidationsStringType,
  typeButtonEnum,
  typeType,
  typeValidationsType,
} from "../../../../models";
import { showToast } from "../../../../store/toast/actions";
import { useDispatch } from "react-redux";
// Icons

interface CustomCalendarProps {}

const MODAL_TITLE = "Programación";
const MODAL_CONFIRM_TITLE = "Modificar programación";

const CustomCalendar: FC<CustomCalendarProps> = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalConfirmIsOpen, setModalConfirmIsOpen] = useState(false);
  const [loginModifiedProgramming, setLoginModifiedProgramming] =
    useState(false);
  const [dateSelected, setDateSelected] = useState<string | null>(null);
  const [schedules, setSchedules] = useState([]);
  const [schedulesModified, setSchedulesModified] = useState([]);
  const [viewCalendar, setViewCalendar] = useState("timeGridDay");
  const schedulesDb = useAllSchedules(
    { sort: "code", order: "-1" },
    "2023",
    loginModifiedProgramming
  );
  const calendarRef = useRef<HTMLDivElement>(null);
  const reProgrammingMutation = useReProgrammingMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let localSchedules = schedulesDb?.data?.data || [];
    localSchedules = localSchedules.map((schedule: any) => {
      return {
        title: schedule.customer?.name || "Sin Cliente",
        start: schedule.dateStart,
        end: schedule.dateEnd,
        id: schedule.code,
      };
    });
    setSchedules(localSchedules);
  }, [schedulesDb?.data?.data]);

  const getHeaderToolbar = useCallback(
    () => ({
      left: "prev,next today",
      center: "title",
      right: "timeGridDay",
    }),
    []
  );

  const saveReProgramming = async (formData: any) => {
    setLoginModifiedProgramming(true);
    try {
      const schedulesWithDriver = schedulesModified.map((schedule: any) => {
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
            customer,
            subCustomer,
            countChickens,
            numberForm,
            ...props
          } = schedule;
          return {
            ...props,
            remarks: formData[schedule.code],
            countChickens,
          };
        }
        return schedule;
      });
      await reProgrammingMutation.mutateAsync(schedulesWithDriver as any);
      dispatch(
        showToast("Se ha modificado la programación correctamente", "success")
      );
    } catch (error) {
      console.error(error);
      dispatch(
        showToast(
          "Hubo algún problema al intentar modificar la programación",
          "error"
        )
      );
    } finally {
      setLoginModifiedProgramming(false);
      setModalConfirmIsOpen(false);
      setSchedulesModified([]);
    }
  };

  const getFormConfigSchedules = (): formConfigType[] => {
    try {
      return schedulesModified.map((schedule: scheduleType) => {
        return {
          name: schedule.code.toString(),
          label: `Escriba aquí la razón del cambio de la programación, codigo: ${
            schedule.code
          } cliente: ${schedule.customer["name" as any]}`,
          value: "",
          type: "text" as typeType,
          fieldType: fieldTypeEnum.text,
          placeholder: `Escriba aquí la razón del cambio de la programación:, codigo: ${
            schedule.code
          } cliente: ${schedule.customer["name" as any]}`,
          validation: {
            type: "string" as typeValidationsType,
            settings: [
              {
                type: "required" as settingsValidationsStringType,
              },
            ],
          },
        };
      });
    } catch (error) {
      dispatch(
        showToast(
          "Para mover de fecha la programacion es necesario que cuente con un cliente asignado",
          "success"
        )
      );
      setModalConfirmIsOpen(false);
      return [];
    }
  };

  const today = useMemo(() => new Date(), []);
  const previousDay = useMemo(
    () => new Date(today.getTime() - 24 * 60 * 60 * 1000),
    [today]
  ); // Restar un día
  const nextDay = useMemo(
    () => new Date(today.getTime() + 24 * 60 * 60 * 1000),
    [today]
  );

  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        initialView: viewCalendar,
        events: schedules as EventInput[],
        locale: esLocale,
        firstDay: 0,
        height: "auto",
        selectable: true,
        headerToolbar: getHeaderToolbar(),
        timeZone: "local",
        eventClick: ({ event }) => {
          navigate(`${COMPOSED_ROUTES.SUMMARY_PROGRAMMING}/${event.id}`);
        },
        displayEventEnd: true,
        dateClick: function (info) {
          setModalIsOpen(true);
          setDateSelected(info.dateStr);
        },
        windowResize: () => true,
        editable: viewCalendar === "timeGridDay",
        droppable: true,
        eventOverlap: (stillEvent: any, movingEvent: any) => {
          return (
            stillEvent.start > movingEvent.end &&
            stillEvent.end < movingEvent.start
          );
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
          setSchedulesModified((prev: any) => {
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

        viewDidMount: (e) => {
          setViewCalendar(e.view.type);
        },
        views: {
          timeGrid: {
            type: "timeGrid",
            duration: { days: 2 },
            buttonText: "Día",
          },
        },
        slotLabelInterval: { minutes: 30 },
        slotLabelFormat: {
          hour: "2-digit",
          minute: "2-digit",
          omitZeroMinute: false,
          meridiem: "short",
        },
      });
      calendar.render();
    }
  }, [
    navigate,
    getHeaderToolbar,
    schedules,
    schedulesDb?.data?.data,
    viewCalendar,
    previousDay,
    nextDay,
  ]);

  return (
    <CalendarContainer>
      {schedulesModified.length > 0 && (
        <div className="button-modify-container">
          <Button extraProps={{ onClick: () => setModalConfirmIsOpen(true) }}>
            Modificar programación
          </Button>
          <Button
            typeButton={typeButtonEnum.stroke}
            extraProps={{ onClick: () => setSchedulesModified([]) }}
          >
            Cancelar modificación
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
            loading={loginModifiedProgramming}
            formConfig={getFormConfigSchedules()}
          />
        </Modal>
      </CustomCalendarWrapper>
    </CalendarContainer>
  );
};

export default CustomCalendar;
