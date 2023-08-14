import { FC } from "react";

// Components
import Card from "../../../../components/display/Card/Card";

// Styles
import { ClientManagementWrapper } from "./styles";

// helpers

interface ClientManagementProps {
  dateInView: string;
}

const ClientManagement: FC<ClientManagementProps> = ({ dateInView }) => {
  return (
    <ClientManagementWrapper>
      <Card>
        <h3>Gestion de Clientes</h3>
        <div>
          <ul>
            <li>Cliente 1</li>
            <li>Cliente 2</li>
          </ul>
        </div>
      </Card>
    </ClientManagementWrapper>
  );
};

export default ClientManagement;
