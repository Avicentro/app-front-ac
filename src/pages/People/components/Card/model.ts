export interface CardProps {
  id: string;
  name: string;
  people_type: string;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}