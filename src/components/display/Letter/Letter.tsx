import { FC } from "react";

// Components

// Styles

import { LetterWrapper } from "./styles";

// helpers

interface LetterProps {
  label: string;
}

const Letter: FC<LetterProps> = ({ label }) => {
  const getFirstLetter = () => {
    if (label) {
      return label[0];
    }
  };
  return (
    <LetterWrapper>
      <span className="letter">{getFirstLetter()}</span>
    </LetterWrapper>
  );
};

export default Letter;
