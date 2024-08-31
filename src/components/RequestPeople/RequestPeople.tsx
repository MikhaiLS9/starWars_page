import { useState } from "react";

import ModalRequestsContainer from "../Modal/RequestsContainer/ModalRequestsStarWars";
import ModuleRequestsBody from "../Modal/RequestsContainer/RequestsBody/RequestsBody";
import Button from "../ui/Button/Button";

import styles from "./RequestPeople.module.css";
import RequestNamePeople from "../Modal/RequestsContainer/RequestsBody/RequestNamePeople/RequestNamePeople";

const RequestPeople = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <section className={styles.requestPeople}>
      <Button appearance="m" onClick={() => setIsVisible((prev) => !prev)}>
        Открыть
      </Button>
      <ModalRequestsContainer isVisible={isVisible} setIsVisible={setIsVisible}>
        <ModuleRequestsBody>
          <RequestNamePeople />
        </ModuleRequestsBody>
      </ModalRequestsContainer>
    </section>
  );
};

export default RequestPeople;
