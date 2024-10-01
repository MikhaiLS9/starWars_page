import CrossIcon from "../../../Icon/CrossIcon";
import SearchIcon from "../../../Icon/SearchIcon";
import Ptag from "../Ptag/Ptag";

import styles from "./SearchInput.module.css";

type SearchInputProps = {
  setSearch: (e: string) => void;
  textError: string | null;
};

const SearchInput = ({ textError, setSearch }: SearchInputProps) => {
  return (
    <div className={styles.searchInput}>
      <input
        type="text"
        autoFocus
        name="getName"
        onChange={(e) => setSearch(e.target.value)}
      />
      <CrossIcon className={styles.crossIcon} />
      <SearchIcon className={styles.searchIcon} />
      {textError && (
        <Ptag size="s" isError>
          {textError}
        </Ptag>
      )}
    </div>
  );
};

export default SearchInput;
