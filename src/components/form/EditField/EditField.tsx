import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useEffect, useState } from "react";

// Components
import { faCheck, faClose, faPencil } from "@fortawesome/free-solid-svg-icons";
import ComponentSelector from "../DynamicForm/components/ComponentSelector/ComponentSelector";

// Styles

// helpers
import { useAnyByUrl } from "../../../hook/useSchedule";

// Models
import { EditFieldWrapper } from "./styles";

interface EditFieldProps {
  label: string;
  handleChange: (s: any) => void;
  loading?: boolean;
  propsField: any;
  shouldEdit?: boolean;
  url?: string;
}

const EditField: FC<EditFieldProps> = ({
  label,
  handleChange,
  loading,
  shouldEdit,
  propsField,
  url,
}) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(label);
  const [isHovered, setIsHovered] = useState(false);
  const [field, setField] = useState(propsField);

  const { data } = useAnyByUrl({}, url, editing, propsField.name);

  useEffect(() => {
    setText(label);
  }, [label]);

  useEffect(() => {
    if (editing && data) {
      setField((prev: any) => {
        const cloneField = { ...prev };
        if (cloneField.fieldType === "select") {
          console.log("data", data);
          cloneField["options"] = [
            {
              label: "Seleccione",
              value: "",
            },
            ...data?.map((client: any) => ({
              label: client.name,
              value: client._id,
            })),
          ];
          return cloneField;
        }
        return prev;
      });
    }
  }, [data, editing, propsField.name]);

  const handleLabelClick = () => {
    setEditing(true);
  };

  const inputChange = (value: any) => {
    setText(value);
  };

  const handleConfirm = () => {
    if (text !== label) {
      handleChange({ [field.name]: text });
    }
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setText(label);
  };

  const handleMouseEnter = () => {
    if (!editing) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!editing) {
      setIsHovered(false);
    }
  };

  return (
    <EditFieldWrapper>
      {editing ? (
        <div className="field-container">
          <ComponentSelector
            {...field}
            value={text}
            handleChange={inputChange}
          />
          {text !== label && (
            <>
              {loading ? (
                <span>loading</span>
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
        <div
          className="icon-container"
          onMouseEnter={() => shouldEdit && handleMouseEnter()}
          onMouseLeave={() => shouldEdit && handleMouseLeave()}
        >
          <label>{text}</label>
          <span
            className="pencil-icon-container"
            onClick={() => shouldEdit && handleLabelClick()}
          >
            {isHovered && <FontAwesomeIcon icon={faPencil} />}
          </span>
        </div>
      )}
    </EditFieldWrapper>
  );
};

export default React.memo(EditField);
