import { FC } from "react";
import Delete from "../../../../components/icons/Delete";
import Edit from "../../../../components/icons/Edit";
import { getLabelByValue } from "./helper";
import { CardProps } from "./model";

// Components

// Styles
import { CardWrapper } from "./styles";

// helpers

const Card: FC<CardProps> = ({
  id,
  name,
  people_type,
  handleEdit,
  handleDelete,
}) => {
  const onEdit = () => {
    handleEdit(id);
  };

  const onDelete = () => {
    handleDelete(id);
  };

  return (
    <CardWrapper>
      <div className="name-container flex column">
        <span className="sub-title">Nombre</span>
        <span className="title">{name}</span>
      </div>
      <div className="type-container flex column">
        <span className="sub-title">Tipo</span>
        <span className="title">{getLabelByValue(people_type)}</span>
        
      </div>
      <div className="actions-container flex">
        <span className="action flex" onClick={() => onEdit()}>
          <span className="edit flex">
            <Edit />
            Editar
          </span>
        </span>
        <span className="action flex " onClick={() => onDelete()}>
          <span className="delete flex">
            <Delete /> Eliminar
          </span>
        </span>
      </div>
    </CardWrapper>
  );
};

export default Card;
