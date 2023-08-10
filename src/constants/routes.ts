export const ROUTES = {
  INDEX: "/",
  NOT_FOUND: "*",
  LOGIN: "/login",
  TRAVEL: "/viaje",
  REST: "/descanso",
  SIGN_IN: "/sign-in",
  SUMMARY: "/resumen",
  PEOPLE: "/personas",
  PROGRAMMING: "/programacion",
  ORDER_ENTRY: "/orden-de-entrada",
  CREATE_PEOPLE: "/crear-personas",
  FORGOT_PASSWORD: "/olvido-su-contrasena",
  CHANGE_PASSWORD: "/cambio-de-contrasena",
};

export const COMPOSED_ROUTES = {
  REST: `${ROUTES.PROGRAMMING}${ROUTES.REST}`,
  TRAVEL: `${ROUTES.PROGRAMMING}${ROUTES.TRAVEL}`,
  SUMMARY_PROGRAMMING: `${ROUTES.PROGRAMMING}${ROUTES.SUMMARY}`,
};
