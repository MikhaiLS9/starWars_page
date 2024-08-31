import { PropsWithChildren } from "react";

import Button from "../../../ui/Button/Button";

import styles from "./RequestsBody.module.css";

type ModuleRequestsBodyProps = PropsWithChildren;

const ModuleRequestsBody = ({ children }: ModuleRequestsBodyProps) => {
  return (
    <div className={styles.moduleRequestsBody}>
      {children}

      <Button appearance="xl">Загрузить еще</Button>
    </div>
  );
};

export default ModuleRequestsBody;
