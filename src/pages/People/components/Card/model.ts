export interface CardProps {
  id: string;
  name: string;
  type: string;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}
