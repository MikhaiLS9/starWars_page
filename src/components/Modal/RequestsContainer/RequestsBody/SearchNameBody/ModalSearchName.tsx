import { useState, useEffect, ChangeEvent } from "react";
import { baseUrl, baseApi, baseParams } from "../../../../../api/api";
import { useDebounce } from "../../../../../hooks/useDebounce";
import { ApiResponse } from "../../../../../interfaces";

import useRequest from "../../../../../hooks/useRequestStarWars";

import styles from "./ModalSearchName.module.css";

const ModalSearchName = () => {
  const [searchNameValue, setSearchNameValue] = useState<string>("");
  const [trigger, setTrigger] = useState<boolean>(false);

  const debouncedSearchName = useDebounce(searchNameValue, 500);

  const {
    data: personsData,
    loading,
    error,
  } = useRequest<ApiResponse>(`${baseUrl}${baseApi}${baseParams}`, trigger, {
    params: { search: debouncedSearchName },
  });

  const starWarsPerson = personsData?.results || [];

  useEffect(() => {
    if (debouncedSearchName) {
      setTrigger(true);
    } else {
      setTrigger(false);
    }
  }, [debouncedSearchName]);

  useEffect(() => {
    if (!loading && trigger) {
      setTrigger(false);
    }
  }, [loading, trigger]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchNameValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="searchName"
        value={searchNameValue}
        onChange={handleChange}
        className={styles.moduleRequestsBody__input}
      />

      {starWarsPerson.map((persons) => (
        <div key={persons.url}>{persons.name}</div>
      ))}
      {loading && <div>Loading...</div>}
      {error && <div>error</div>}
    </div>
  );
};

export default ModalSearchName;
