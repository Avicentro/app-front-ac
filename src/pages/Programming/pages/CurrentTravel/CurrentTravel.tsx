import { FC, useEffect, useState } from "react";

// Components
import Card from "../../../../components/display/Card/Card";
import Modal from "../../../../components/display/Modal/Modal";
import Button from "../../../../components/form/Button/Button";
import { Container } from "../../../../components/genericStyles";
import BackButton from "../../../../components/display/BackButton/BackButton";
import CustomTable from "../../../../components/display/CustomTable/CustomTable";
import { getColumnsWithCallbacks } from "../../../../components/display/CustomTable/helpers/getColumnsWithCallbacks";

// Styles
import { CurrentTravelWrapper } from "./styles";

// helpers
import { useDispatch } from "react-redux";
import { COLUMNS_SCHEDULE } from "./config/config";
import { showToast } from "../../../../store/toast/actions";
import { useCreateLogbook } from "../../../../hook/useLogbook";
import { useDaySchedules } from "../../../../hook/useSchedule";
import TextArea from "../../../../components/form/TextArea/TextArea";
import { typeButtonEnum } from "../../../../models";
import { useNavigate } from "react-router-dom";
import { COMPOSED_ROUTES } from "../../../../constants/routes";
import { formatDateToInit } from "../../../../helpers/format/formatDateToInit";

interface CurrentTravelProps {}

const CurrentTravel: FC<CurrentTravelProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [travels, setTravels] = useState([]);
  const { data, isLoading } = useDaySchedules(
    {},
    formatDateToInit(new Date()).toISOString()
  );
  const mutateCreateLogbook = useCreateLogbook();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const actionsToMatch = {};

  const closeModal = () => {
    setContent("");
    setShowModal(false);
  };

  const saveLogbook = async () => {
    try {
      setLoading(true);
      const data = { logBook: content, date: new Date().toISOString() };
      const response = await mutateCreateLogbook.mutateAsync(data);
      dispatch(showToast(response.message, "success"));
    } catch (error: any) {
      dispatch(showToast(error?.response?.data?.message, "error"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const newTravels = data?.data.filter((travel: any) => travel.type === 'travel');
    setTravels(newTravels);
  }, [data])
  

  return (
    <Container>
      <CurrentTravelWrapper>
        {showModal && (
          <Modal
            title="Creación de bitácora"
            open={showModal}
            handleClose={closeModal}
          >
            <div className="form-container">
              <TextArea
                handleChange={setContent}
                value={content}
                label="Bitácora"
              />
              <Button extraProps={{ onClick: saveLogbook }} loading={loading}>
                Guardar
              </Button>
            </div>
          </Modal>
        )}
        <BackButton />
        <div className="buttons-container">
          <Button
            extraProps={{
              onClick: () => navigate(COMPOSED_ROUTES.LOGBOOK_PROGRAMMING),
            }}
            typeButton={typeButtonEnum.stroke}
          >
            Ver bitácoras
          </Button>
          <Button
            extraProps={{
              onClick: () => setShowModal(true),
            }}
          >
            Crear bitácora
          </Button>
        </div>
        <Card>
          <CustomTable
            data={travels || []}
            columns={getColumnsWithCallbacks(COLUMNS_SCHEDULE, actionsToMatch)}
            loading={isLoading}
          />
        </Card>
      </CurrentTravelWrapper>
    </Container>
  );
};

export default CurrentTravel;
