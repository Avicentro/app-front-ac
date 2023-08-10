import { FC } from "react";
import Card from "../../../../components/display/Card/Card";
import IceInfo from "./components/IceInfo/IceInfo";

// Components

// Styles

import { IceInformationWrapper } from "./styles";

// helpers

interface IceInformationProps {
  dateInView: string;
}

const IceInformation: FC<IceInformationProps> = ({ dateInView }) => {
  return (
    <IceInformationWrapper>
      <Card>{!!dateInView && <IceInfo dateInView={dateInView} />}</Card>
    </IceInformationWrapper>
  );
};

export default IceInformation;
