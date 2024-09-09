import { PropsWithChildren } from "react";

import Ptag from "../Ptag/Ptag";

import styles from "./SearchInput.module.css";

type SearchInputProps = PropsWithChildren<{
  setSearch: (e: string) => void;
  textError: string | null;
}>;

const SearchInput = ({ children, textError, setSearch }: SearchInputProps) => {
  return (
    <div className={styles.searchInput}>
      <input
        type="text"
        autoFocus
        name="getName"
        onChange={(e) => setSearch(e.target.value)}
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
