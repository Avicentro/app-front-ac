import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useEffect, useState } from "react";

// Components
import { faCheck, faClose, faPencil } from "@fortawesome/free-solid-svg-icons";
import ComponentSelector from "../DynamicForm/components/ComponentSelector/ComponentSelector";

// Styles

// helpers
import { useAnyByUrl } from "../../../hook/useSchedule";
import DOMPurify from "dompurify";

// Models
import { EditFieldWrapper } from "./styles";
import Spinner from "../../feedback/Spinner/Spinner";
import { fieldTypeEnum } from "../../../models";

interface EditFieldProps {
  label: string;
  handleChange: (s: any) => void;
  loading?: boolean;
  propsField: any;
  shouldEdit?: boolean;
  url?: string;
}

const EditField: FC<EditFieldProps> = ({
  url,
  label,
  loading,
  shouldEdit,
  propsField,
  handleChange,
}) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(label);
  const [field, setField] = useState(propsField);

  const { data, isLoading }: { data: any; isLoading: boolean } = useAnyByUrl(
    {},
    url,
    editing,
    propsField.name
  );
  const dataResponse = data?.data?.data;

  useEffect(() => {
    setText(label);
  }, [label]);

  useEffect(() => {
    if (editing && dataResponse && !isLoading) {
      setField((prev: any) => {
        const cloneField = { ...prev };
        if (cloneField.fieldType === "select") {
          cloneField["options"] = [
            {
              label: "Seleccione",
              value: "",
            },
            ...dataResponse?.map((client: any) => ({
              label: client.name,
              value: propsField.name === "city" ? client.cityId : client._id,
            })),
          ];
          return cloneField;
        }
        return prev;
      });
    }
  }, [dataResponse, editing, propsField.name, isLoading]);

  const handleLabelClick = () => {
    setEditing(true);
  };

  const inputChange = (value: any) => {
    setText(value);
  };

  const handleConfirm = () => {
    if (text !== label) {
      handleChange({ [field.name]: propsField.name === "city" ? +text : text });
    }
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setText(label);
  };

  return (
    <EditFieldWrapper>
      {editing ? (
        <div className="field-container">
          {isLoading || loading ? (
            <Spinner />
          ) : (
            <ComponentSelector
              {...field}
              value={text}
              handleChange={inputChange}
            />
          )}
          {text !== label && (
            <>
              {loading ? (
                <Spinner />
              ) : (
                <div className="actions-container">
                  <button onClick={handleConfirm} data-item-type="accent-1">
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                  <button onClick={handleCancel} data-item-type="accent-2">
                    <FontAwesomeIcon icon={faClose} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <div className="icon-container">
          {field.fieldType === fieldTypeEnum.textArea ? (
            <span
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(field.value),
              }}
            ></span>
          ) : (
            <label>{!!text ? text : "-"}</label>
          )}
          <span
            className="pencil-icon-container"
            onClick={() => shouldEdit && handleLabelClick()}
          >
            {shouldEdit && <FontAwesomeIcon icon={faPencil} />}
          </span>
        </div>
      )}
    </EditFieldWrapper>
  );
};

export default React.memo(EditField);
