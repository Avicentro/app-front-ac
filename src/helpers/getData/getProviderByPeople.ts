export const getProviderByPeople = (peopleList: any[]) => {
  return peopleList.map((user) => user.people_type === "PROVIDER");
};
