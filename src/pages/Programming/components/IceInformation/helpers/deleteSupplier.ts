import { supplierType } from "../model";

export const deleteSupplier = (
  iceInformation: any,
  iceSupplier: supplierType
) => {
  const indexIceSupplierFound = iceInformation.supplier_list.findIndex(
    (supplier: supplierType) => supplier.supplier === iceSupplier.supplier
  );
  iceInformation.supplier_list.splice(indexIceSupplierFound, 1);
  return iceInformation;
};
