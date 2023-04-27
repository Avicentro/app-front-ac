export const ROUTES = {
  INDEX: "/",
  REST: "/descanso",
  NOT_FOUND: "*",
  LOGIN: "/login",
  TRAVEL: "/viaje",
  PROGRAMMING: "/programacion",
};

export const COMPOSED_ROUTES = {
  REST: `${ROUTES.PROGRAMMING}${ROUTES.REST}`,
  TRAVEL: `${ROUTES.PROGRAMMING}${ROUTES.TRAVEL}`,
};
