import { FC } from "react";
import Card from "../../../../components/display/Card/Card";
import Calendar from "./components/Calendar/Calendar";
import IceInfo from "./components/IceInfo/IceInfo";

// Components

// Styles

import { IceInformationWrapper } from "./styles";

// helpers

interface IceInformationProps {}

const IceInformation: FC<IceInformationProps> = () => {
  return (
    <IceInformationWrapper>
      <Card>
        <Calendar />
      </Card>
      <Card>
        <IceInfo />
      </Card>
    </IceInformationWrapper>
  );
};

export default IceInformation;
