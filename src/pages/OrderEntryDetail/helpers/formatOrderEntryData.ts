export const formatOrderEntryData = (data: any) => {
  if (!data) return data;
  const dataCopy = { ...data };
  Object.keys(dataCopy?.dataVeterinary).forEach((keyGroup) => {
    if (typeof dataCopy?.dataVeterinary[keyGroup] === "object") {
      Object.keys(dataCopy?.dataVeterinary[keyGroup]).forEach((keyData) => {
        const chickenDetail = dataCopy?.dataVeterinary[keyGroup][keyData];
        dataCopy.dataVeterinary[keyGroup][keyData] = isNaN(chickenDetail)
          ? chickenDetail
          : Number(chickenDetail).toFixed(3);
      });
    }
  });
  return dataCopy;
};
