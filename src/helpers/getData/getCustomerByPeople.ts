export const getCustomerByPeople = (peopleList: any[]) => {
  return peopleList.map((user) => user.people_type === "CUSTOMER");
};
