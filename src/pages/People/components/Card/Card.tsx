import { FC } from "react";
import Delete from "../../../../components/icons/Delete";
import Edit from "../../../../components/icons/Edit";
import { CardProps } from "./model";

// Components

// Styles
import { CardWrapper } from "./styles";

// helpers

const Card: FC<CardProps> = ({ id, name, type, handleEdit, handleDelete }) => {
  const onEdit = () => {
    handleEdit(id);
  };

  const onDelete = () => {
    handleDelete(id);
  };

  return (
    <CardWrapper>
      <div className="name-container flex column">
        <span className="title">Nombre</span>
        <span className="sub-title">{name}</span>
      </div>
      <div className="type-container flex column">
        <span className="title">Tipo</span>
        <span className="sub-title">{type}</span>
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
