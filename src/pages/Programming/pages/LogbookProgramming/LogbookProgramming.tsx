import { FC } from "react";
import { Container } from "../../../../components/genericStyles";

// Components

// Styles
import { LogbookProgrammingWrapper } from "./styles";

// helpers

interface LogbookProgrammingProps {}

const LogbookProgramming: FC<LogbookProgrammingProps> = () => {
  return (
    <Container>
      <LogbookProgrammingWrapper></LogbookProgrammingWrapper>;
    </Container>
  );
};

export default LogbookProgramming;
