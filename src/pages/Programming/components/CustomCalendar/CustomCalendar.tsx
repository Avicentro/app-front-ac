import {
  Dispatch,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
import { sizeButtonEnum, typeButtonEnum } from "../../../../models";
import { showToast } from "../../../../store/toast/actions";
import { useDispatch } from "react-redux";
import { getLabelByType } from "./helpers";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import PdfProgramming from "./components/PdfProgramming/PdfProgramming";
// Icons
interface CustomCalendarProps {
  setDateInView: any;
  dateInView: string;
  setTravelLength: (s: number) => void;
  travelLength: number;
}

const MODAL_TITLE = "Programación";
const MODAL_CONFIRM_TITLE = "Modificar programación";

const CustomCalendar: FC<CustomCalendarProps> = ({
  dateInView,
  travelLength,
  setDateInView,
  setTravelLength,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalConfirmIsOpen, setModalConfirmIsOpen] = useState(false);
  const [loginModifiedProgramming, setLoginModifiedProgramming] =
    useState(false);
  const [dateSelected, setDateSelected] = useState<string | null>(null);
  const [schedules, setSchedules] = useState([]);
  const [schedulesModified, setSchedulesModified] = useState([]);
  const [viewCalendar, setViewCalendar] = useState("timeGridDay");
  const schedulesDb = useAllSchedules(
    {},
    new Date(dateInView || new Date())?.toISOString(),
    dateInView
  );
  const calendarRef = useRef<HTMLDivElement>(null);
  const reProgrammingMutation = useReProgrammingMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const today = useMemo(() => new Date(), []);
  const previousDay = useMemo(
    () => new Date(today.getTime() - 24 * 60 * 60 * 1000),
    [today]
  );
  const nextDay = useMemo(
    () => new Date(today.getTime() + 24 * 60 * 60 * 1000),
    [today]
  );

  useEffect(() => {
    let localSchedules = schedulesDb?.data?.data || [];
    localSchedules = localSchedules.map((schedule: any) => {
      return {
        title: getLabelByType(schedule),
        start: schedule.dateStart,
        end: schedule.dateEnd,
        id: schedule._id,
        type: schedule.type,
      };
    });
    setSchedules(localSchedules);
  }, [schedulesDb?.data?.data]);

  useEffect(() => {
    const onlyTravels = schedules?.filter(
      (schedule: any) => schedule.type === "travel"
    );
    setTravelLength(onlyTravels.length);
  }, [schedules, setTravelLength]);

  const getHeaderToolbar = useCallback(
    () => ({
      left: "",
      center: "title",
      right: "timeGridDay",
    }),
    []
  );

  const generatePdfDocument = async (fileName: string, PdfComponent: any) => {
    const blob = await pdf(PdfComponent).toBlob();
    saveAs(blob, fileName);
  };

  const saveReProgramming = async () => {
    setLoginModifiedProgramming(true);
    try {
      const schedulesWithDriver = schedulesModified;
      const response = await reProgrammingMutation.mutateAsync(
        schedulesWithDriver as any
      );
      dispatch(showToast(response, "success"));
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
        eventClick: (e) => {
          navigate(`${COMPOSED_ROUTES.SUMMARY_PROGRAMMING}/${e.event.id}`);
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
              schedule._id.toString() === info.event.id.toString()
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
        allDaySlot: false,
        slotDuration: "00:05:00",
        slotLabelFormat: {
          hour: "2-digit",
          minute: "2-digit",
          omitZeroMinute: false,
          meridiem: "short",
        },
        datesSet: (e) => {
          setDateInView(e.startStr); // AQUI ES DONDE SE ENVÍA LA FECHA QUE SE VISUALIZA PARA ENVIAR EL GET
        },
        eventClassNames: (renderProps) => {
          return renderProps.event.extendedProps.type === "rest"
            ? "bar-rest"
            : "bar-travel";
        },
      });
      calendar.render();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // No poner todas las dependencias
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
      <section className="travels-count">
        <h2>Viajes: {travelLength}</h2>
        <Button
          sizeButton={sizeButtonEnum.medium}
          extraProps={{
            onClick: () =>
              generatePdfDocument(
                `Programacion de ${new Date().toLocaleString("es-CO", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZoneName: "short",
                })}`,
                <PdfProgramming data={schedulesDb?.data?.data} />
              ),
          }}
        >
          Descargar programación
        </Button>
      </section>
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
          />
        </Modal>
      </CustomCalendarWrapper>
    </CalendarContainer>
  );
};

export default CustomCalendar;
