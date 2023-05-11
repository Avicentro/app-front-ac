const getAuthorization = (token: string | null) => {
  if (token) {
    return `Bearer ${token}`;
  }
  return "";
};
export const Headers = {
  headers: {
    Authorization: getAuthorization(localStorage.getItem("access_token")),
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};
