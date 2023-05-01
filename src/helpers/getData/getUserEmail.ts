export const getUserEmail = () => {
  const loginData = localStorage.getItem("loginData");
  if (loginData) {
    return JSON.parse(loginData).email;
  }
  return null;
};
