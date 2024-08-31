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
  delay,
  setSearch,
}: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const getSearch = useDebounce(searchValue, delay);

  useEffect(() => {
    if (getSearch) {
      setSearch(getSearch);
    }
  }, [getSearch, setSearch]);

  const searchInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.searchInput}>
      <input type="text" autoFocus name="getName" onChange={searchInputValue} />
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
