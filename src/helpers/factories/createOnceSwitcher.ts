export default function createOnceSwitcher(valueObject: any, DEFAULT: any) {
  return (key: any) => {
    if (valueObject?.[key]) {
      return valueObject?.[key];
    }
    return valueObject[DEFAULT];
  };
}
