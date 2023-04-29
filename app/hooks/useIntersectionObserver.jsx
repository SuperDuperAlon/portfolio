import { useEffect } from "react";
import { observer } from "../utils/intersection-observer";

export function useIntersectionObserver() {
  useEffect(() => {
    return () => {
      observer.disconnect();
    };
  }, []);

  return function observe(className) {
    const elements = document.querySelectorAll(`.${className}`);
    console.log(elements);
    elements.forEach((element) => {
      observer.observe(element);
    });
  };
}