export const FEEDBACK_MESSAGES = {
  ONLY_NUMBERS: "Debe contener únicamente números",
  ONLY_LETTERS:
    "No puede contener números, espacios, puntos, tildes o caracteres especiales",
  FOR_NAME:
    "No puede contener números, espacios, puntos, tildes o caracteres especiales",
  EMAIL: "El campo debe ser de tipo email",
};

export const REGEX_VALIDATION = {
  SHOULD_NUMBERS_LETTERS_AND_ONE_SPACE: /^[a-zA-Z0-9]+( [a-zA-Z0-9]+)?$/,
  SHOULD_NUMBERS_AND_LETTERS: /^[a-zA-Z0-9]$/,
  SHOULD_ONLY_LETTERS: /^[a-zA-Z]+$/,
  SHOULD_LETTERS_AND_SPACES: /^[a-zA-Z ]+$/,
  SHOULD_ONLY_NUMBERS: /^[0-9]+$/,
  SHOULD_ONLY_EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};
