import { optionsType } from "../../models";

export const createArrayOfNumbersForSelect = (
  number: number
): optionsType[] => {
  return Array.from({ length: number }, (_, index) => index + 1).map(
    (number) => ({ label: number, value: number })
  );
};
