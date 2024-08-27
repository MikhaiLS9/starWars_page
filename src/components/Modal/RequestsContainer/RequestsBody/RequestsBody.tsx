import { useEffect, useState } from "react";
import { baseUrl, baseApi, baseParams } from "../../../../api/api";
import { ApiResponse } from "../../../../interfaces";

import useRequest from "../../../../hooks/useRequestStarWars";
import Button from "../../../ui/Button/Button";
import ModalSearchName from "./SearchNameBody/ModalSearchName";

import styles from "./RequestsBody.module.css";

const ModuleRequestsBody = () => {
  const [trigger, setTrigger] = useState<boolean>(true);

  const {
    data: responseStarWars,
    loading,
    error,
  } = useRequest<ApiResponse>(`${baseUrl}${baseApi}${baseParams}`, trigger, {
    params: { page: "3" },
  });

  const starWarsPerson = responseStarWars?.results || [];

  useEffect(() => {
    if (!loading && trigger) {
      setTrigger(false);
    }
  }, [loading, trigger]);

  console.log(responseStarWars?.next);

  return (
    <div className={styles.moduleRequestsBody}>
      <ModalSearchName
       />

      {starWarsPerson.map((persons) => (
        <div key={persons.url}>{persons.name}</div>
      ))}
      {error && <div>error</div>}

      <Button appearance="xl">Загрузить еще</Button>
    </div>
  );
};

export default ModuleRequestsBody;
