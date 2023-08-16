import { FC } from "react";

// Components

// Styles
import { ServerErrorWrapper } from "./styles";

// helpers

interface ServerErrorProps {}

const ServerError: FC<ServerErrorProps> = () => {
  return (
    <ServerErrorWrapper>
      Hubo un error al hacer la consulta, por favor, vuelva a ejecutar la acción
      o comuniquese con el soporte.
    </ServerErrorWrapper>
  );
};

export default ServerError;
