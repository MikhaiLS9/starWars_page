import { useState, useEffect } from "react";
import { baseUrl, baseApi, baseParams } from "../../../../../api/api";
import useRequest from "../../../../../hooks/useRequestStarWars";
import { ApiResponse } from "../../../../../interfaces";
import SearchInput from "../../../../ui/SearchInput/SearchInput";

const RequestNamePeople = () => {
  const [trigger, setTrigger] = useState<boolean>(true);
  const [searchName, setSearchName] = useState<string>("");

  const { data, error, loading } = useRequest<ApiResponse>(
    `${baseUrl}${baseApi}${baseParams}`,
    trigger && searchName !== "",
    { params: { search: searchName } }
  );

  useEffect(() => {
    if (!loading && trigger && searchName !== "") {
      setTrigger(false);
    }
  }, [loading, trigger, searchName]);

  console.log(data);

  return (
    <div>
      {loading && <div>Loading...</div>}

      <SearchInput
        setSearch={setSearchName}
        textError={error}
        delay={700}
      ></SearchInput>
    </div>
  );
};
export default RequestNamePeople;
