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
  people_type: "PROVIDER" | "CUSTOMER" | "SUBCUSTOMER";
};

export const getAllCustomers = (allCustomers: allCustomersType[]) => {
  return [
    { label: "Seleccione", value: "" },
    ...allCustomers
      .filter(({ people_type }) => people_type === "CUSTOMER")
      .map(({ name, _id }) => ({
        label: name,
        value: _id,
      })),
  ];
};
export const getAllSupplier = (allCustomers: allCustomersType[]) => {
  return [
    { label: "Seleccione", value: "" },
    ...allCustomers
      .filter(({ people_type }) => people_type === "PROVIDER")
      .map(({ name, _id }) => ({
        label: name,
        value: _id,
      })),
  ];
};
