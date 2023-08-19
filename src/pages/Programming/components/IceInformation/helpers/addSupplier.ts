export const addSupplier = (
  iceInformation: any,
  iceSupplier: { supplier: string; amount: number }
) => {
  iceInformation.supplier_list.push(iceSupplier);
  return iceInformation;
};
