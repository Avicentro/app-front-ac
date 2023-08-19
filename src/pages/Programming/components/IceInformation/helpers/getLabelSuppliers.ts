import { supplierSelectType, supplierType } from "../model";

export const getLabelSuppliers = (
  supplierList: supplierType[] = [],
  suppliersInSelect: supplierSelectType[] = []
) => {
  const select: supplierSelectType[] = [];
  supplierList.forEach((supplier) => {
    suppliersInSelect.forEach((supplierInSelect: any) => {
      if (supplierInSelect._id === supplier.supplier) {
        select.push({
          label: supplierInSelect.name,
          value: supplierInSelect._id,
        });
      }
    });
  });
  console.log("select", select);
  return select;
};
