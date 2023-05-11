export const getUserTokenExpired = () => {
  const loginData = localStorage.getItem("loginData");
  if (loginData) {
    return JSON.parse(loginData).tokenExpired;
  }
  return null;
};
