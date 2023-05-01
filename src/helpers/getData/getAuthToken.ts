export const getAuthToken = () => {
  const loginData = localStorage.getItem("loginData");
  if (loginData) {
    return JSON.parse(loginData).access_token;
  }
  return null;
};
