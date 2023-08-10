export interface CardProps {
  _id: string;
  name: string;
  email?: string;
  password?: string;
  role: string;
  resetPasswordToken?: string;
  status?: boolean;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}
