export const getUserRol = () => {
  const loginData = localStorage.getItem("loginData");
  if (loginData) {
    return JSON.parse(loginData).role;
  }
  return null;
};
