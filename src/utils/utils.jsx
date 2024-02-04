import { useEffect, useRef } from "react";

export const capitalizedFirstLetter = (word) => {
  if (!word) return "";
  let firstLetter = word[0]?.toUpperCase();
  console.log("word: ", word);
  let restOfTheWord = word.slice(1);
  return firstLetter + restOfTheWord;
};

export const insertIntoTable = (row, col, value, table) => {};

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export const useCompare = (value) => {
  const prevValue = usePrevious(value);
  const isChanged = prevValue !== undefined && prevValue !== value;
  return isChanged;
};
