export const getLabelByValue = (value: string) =>
  ({
    CUSTOMER: "Cliente",
    SUBCUSTOMER: "Sub Cliente",
    PROVIDER: "Proveedor",
  }[value] ?? "-");
