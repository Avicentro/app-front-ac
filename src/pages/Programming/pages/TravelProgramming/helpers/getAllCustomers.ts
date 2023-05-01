type allCustomersType = {
  _id: string;
  name: string;
  document_type: string;
  document: string;
  address: string;
  status: string;
  cellphone: string;
  email: string;
  __v: number;
};

export const getAllCustomers = (allCustomers: allCustomersType[]) => {
  return [
    { label: "Seleccione", value: "" },
    ...allCustomers.map(({ name, _id }) => ({
      label: name,
      value: _id,
    })),
  ];
};
