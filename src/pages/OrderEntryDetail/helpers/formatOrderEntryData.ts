export const formatOrderEntryData = (data: any) => {
  if (!data) return data;
  const dataCopy = { ...data };
  Object.keys(dataCopy?.dataVeterinary).forEach((keyGroup) => {
    if (typeof dataCopy?.dataVeterinary[keyGroup] === "object") {
      Object.keys(dataCopy?.dataVeterinary[keyGroup]).forEach((keyData) => {
        const chickenDetail = dataCopy?.dataVeterinary[keyGroup][keyData];
        dataCopy.dataVeterinary[keyGroup][keyData] = isNaN(chickenDetail)
          ? chickenDetail
          : Number(chickenDetail).toFixed(0);
      });
    }
  });
  dataCopy?.WeighingsList.forEach((weighing: any, index: number) => {
    dataCopy.WeighingsList[index] = {
      ...dataCopy.WeighingsList[index],
      basketWeightWeighing: Number(
        dataCopy.WeighingsList[index].basketWeightWeighing
      ).toFixed(2),
      grossWeightWeighing: Number(
        dataCopy.WeighingsList[index].grossWeightWeighing
      ).toFixed(2),
      netWeightWeighing: Number(
        dataCopy.WeighingsList[index].netWeightWeighing
      ).toFixed(2),
    };
  });
  return dataCopy;
};
