export const getUserIsAdmin = () => {
  const loginData = localStorage.getItem("loginData");
  if (loginData) {
    return JSON.parse(loginData).role === "ADMIN";
  }
  return null;
};
