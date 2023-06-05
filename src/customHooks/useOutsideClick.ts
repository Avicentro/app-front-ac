import { useEffect } from "react";

const useOutsideClick = (ref: any, callback: any, event?: any) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener(`${event ?? "click"}`, handleClick);

    return () => {
      document.removeEventListener(`${event ?? "click"}`, handleClick);
    };
  });
};

export { useOutsideClick };
