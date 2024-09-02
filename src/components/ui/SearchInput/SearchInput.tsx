import { ChangeEvent, PropsWithChildren, useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";

import Ptag from "../Ptag/Ptag";

import styles from "./SearchInput.module.css";

type SearchInputProps = PropsWithChildren<{
  setSearch: (e: string) => void;
  textError: string | null;
  delay: number;
}>;

const SearchInput = ({
  children,
  textError,
  setSearch,
  delay,
}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const debouncedValue = useDebounce(inputValue, delay);

  useEffect(() => {
    setSearch(debouncedValue);
  }, [debouncedValue, setSearch]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.searchInput}>
      <input
        type="text"
        autoFocus
        name="getName"
        onChange={handleInputChange}
      />
      {children}
      {textError && (
        <Ptag size="s" isError>
          {textError}
        </Ptag>
      )}
    </div>
  );
};

export default SearchInput;
