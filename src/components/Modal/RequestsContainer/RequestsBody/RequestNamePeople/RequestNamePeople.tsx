import { useState, useCallback, useEffect } from "react";
import { baseUrl, baseApi, baseParams } from "../../../../../api/api";
import { useDebounce } from "../../../../../hooks/useDebounce";
import { ApiResponse, Person } from "../../../../../interfaces";

import SearchInput from "../../../../ui/SearchInput/SearchInput";
import Button from "../../../../ui/Button/Button";
import useFetch from "../../../../../hooks/eeeee";
import PersonList from "./PersonList/PersonList";

const RequestNamePeople = () => {
  const [searchName, setSearchName] = useState<string>("");
  const [searchPage, setSearchPage] = useState<string | null>(null);
  const [resultStarWars, setResultStarWars] = useState<Person[]>([]);
  const debouncedSearchName = useDebounce(searchName, 700);

  const createFetchUrl = useCallback(() => {
    const params = new URLSearchParams({
      search: debouncedSearchName,
    });
    return searchPage
      ? searchPage
      : `${baseUrl}${baseApi}${baseParams}?${params.toString()}`;
  }, [debouncedSearchName, searchPage]);

  const { data, loading, error } = useFetch<ApiResponse>(createFetchUrl());

  const handleNextPage = () => {
    if (data?.next) {
      setSearchPage(data.next);
    }
  };

  const handlePreviousPage = () => {
    if (data?.previous) {
      setSearchPage(data.previous);
    }
  };

  useEffect(() => {
    if (data) {
      setResultStarWars((prevResults) => [...prevResults, ...data.results]);
    }
  }, [data]);

  return (
    <>
      <SearchInput
        textError={error?.message || null}
        setSearch={setSearchName}
      />
      {loading && <div>Loading...</div>}
      {data && (
        <>
          {resultStarWars.map((result, index) => (
            <PersonList personList={result} key={result.url + index} />
          ))}
          {data.next ? (
            <Button type="button" appearance="xl" onClick={handleNextPage}>
              Загрузить еще
            </Button>
          ) : (
            <Button type="button" appearance="xl" onClick={handlePreviousPage}>
              Назад
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default RequestNamePeople;
