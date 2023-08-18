import { FC } from "react";
import Card from "../../../../components/display/Card/Card";
import IceInfo from "./components/IceInfo/IceInfo";

// Components

// Styles

import { IceInformationWrapper } from "./styles";

// helpers

interface IceInformationProps {
  dateInView: string;
  travelLength: number;
}

const IceInformation: FC<IceInformationProps> = ({
  dateInView,
  travelLength,
}) => {
  return (
    <IceInformationWrapper>
      <Card>
        {!!dateInView && (
          <IceInfo dateInView={dateInView} travelLength={travelLength} />
        )}
      </Card>
    </IceInformationWrapper>
  );
};

export default IceInformation;
