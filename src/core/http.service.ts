export const Headers = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};
