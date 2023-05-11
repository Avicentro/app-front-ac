export const ROUTES = {
  INDEX: "/",
  REST: "/descanso",
  SIGN_IN: "/sign-in",
  NOT_FOUND: "*",
  LOGIN: "/login",
  TRAVEL: "/viaje",
  PROGRAMMING: "/programacion",
  SUMMARY: "/resumen",
};

export const COMPOSED_ROUTES = {
  REST: `${ROUTES.PROGRAMMING}${ROUTES.REST}`,
  TRAVEL: `${ROUTES.PROGRAMMING}${ROUTES.TRAVEL}`,
  SUMMARY_PROGRAMMING: `${ROUTES.PROGRAMMING}${ROUTES.SUMMARY}`,
};
