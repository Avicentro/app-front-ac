import { FC, useEffect, useState } from "react";

// Components
import Card from "../../../../components/display/Card/Card";
import Spinner from "../../../../components/feedback/Spinner/Spinner";
import { useAllPeople } from "../../../../hook/usePeople";

// Styles
import {
  ClientManagementWrapper,
  CustomerContainer,
  CustomersContainer,
} from "./styles";

// helpers

interface ClientManagementProps {
  dateInView: string;
}
type customerType = {
  name: string;
  isMarked: boolean;
  value: string;
};

const PEOPLE_TYPE = {
  CUSTOMER: "CUSTOMER",
  PROVIDER: "PROVIDER",
  SUB_CUSTOMER: "SUBCUSTOMER",
};

const customerMarkedStorage = localStorage.getItem("customersMarked");

const ClientManagement: FC<ClientManagementProps> = ({ dateInView }) => {
  const [customers, setCustomers] = useState<customerType[]>([]);
  const { data, isLoading, isError } = useAllPeople(dateInView);

  useEffect(() => {
    if (data) {
      const customers = data?.data
        .filter((people: any) => people.people_type === PEOPLE_TYPE.CUSTOMER)
        .map((peopleCustomer: any) => ({
          isMarked: false,
          name: peopleCustomer.name,
          value: peopleCustomer._id,
        }));
      setCustomers(customers);
      if (!customerMarkedStorage) {
        localStorage.setItem("customersMarked", JSON.stringify(customers));
      } else {
        setCustomers(JSON.parse(customerMarkedStorage));
      }
    }
  }, [data]);

  const onCheckCustomer = (event: any) => {
    const value = event.target.value;
    const newData = customers;
    const valueChangedIndex = newData.findIndex(
      (customer: customerType) => customer.value === value
    );
    newData[valueChangedIndex].isMarked = !newData[valueChangedIndex].isMarked;

    localStorage.setItem("customersMarked", JSON.stringify(newData));
    setCustomers((prev) => [...newData]);
  };

  return (
    <ClientManagementWrapper>
      <Card>
        <h3>Gestor de Clientes</h3>
        {isLoading ? (
          <Spinner />
        ) : (
          <CustomersContainer>
            {customers.map((customer) => (
              <CustomerContainer
                key={`${customer.value}_${customer.isMarked}`}
                isChecked={customer.isMarked}
              >
                <input
                  type="checkbox"
                  id={customer.value}
                  name={customer.value}
                  value={customer.value}
                  checked={customer.isMarked}
                  onChange={onCheckCustomer}
                />
                <p>{customer.name}</p>
              </CustomerContainer>
            ))}
          </CustomersContainer>
        )}
      </Card>
    </ClientManagementWrapper>
  );
};

export default ClientManagement;
