import { useState } from "react";

import ModalRequestsContainer from "../Modal/RequestsContainer/ModalRequestsStarWars";
import ModuleRequestsBody from "../Modal/RequestsContainer/RequestsBody/RequestsBody";
import Button from "../ui/Button/Button";
import Ptag from "../ui/Ptag/Ptag";

import styles from "./RequestPeople.module.css";

const RequestPeople = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <section className={styles.requestPeople}>
      <div className={styles.requestPeopleBlock}>
        <Ptag size="m">Чтобы получить имена сделайте</Ptag>
        <Button appearance="m" onClick={() => setIsVisible((prev) => !prev)}>
          Запрос
        </Button>
      </div>
      <ModalRequestsContainer isVisible={isVisible} setIsVisible={setIsVisible}>
        <ModuleRequestsBody />
      </ModalRequestsContainer>
    </section>
  );
};

export default RequestPeople;
