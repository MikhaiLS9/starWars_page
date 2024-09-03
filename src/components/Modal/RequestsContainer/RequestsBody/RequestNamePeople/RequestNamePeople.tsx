import { useState, useCallback } from "react";
import { baseUrl, baseApi, baseParams } from "../../../../../api/api";
import { useDebounce } from "../../../../../hooks/useDebounce";
import { ApiResponse } from "../../../../../interfaces";

import SearchInput from "../../../../ui/SearchInput/SearchInput";
import Button from "../../../../ui/Button/Button";
import useFetch from "../../../../../hooks/useFetch";
import PersonList from "./PersonList/PersonList";

const RequestNamePeople = () => {
  const [searchName, setSearchName] = useState<string>("");
  const [searchNextPage, setSearchNextPage] = useState<string | null>(null);
  const debouncedSearchName = useDebounce(searchName, 700);

  const createFetchUrl = useCallback(() => {
    const params = new URLSearchParams({
      search: debouncedSearchName,
    });
    return searchNextPage
      ? searchNextPage
      : `${baseUrl}${baseApi}${baseParams}?${params.toString()}`;
  }, [debouncedSearchName, searchNextPage]);

  const { data, loading, error } = useFetch<ApiResponse>(createFetchUrl());

  const handleNextPage = () => {
    if (data?.next) {
      setSearchNextPage(data.next);
    }
  };

  return (
    <>
      <SearchInput
        textError={error?.message || null}
        delay={700}
        setSearch={setSearchName}
      />
      {loading && <div>Loading...</div>}
      {data && (
        <>
            
            {data.results.map(result =>  <PersonList personList={result}  key={result.url}/>)}
          {data.next && (
            <Button type="button" appearance="xl" onClick={handleNextPage}>
              Загрузить еще
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default RequestNamePeople;
