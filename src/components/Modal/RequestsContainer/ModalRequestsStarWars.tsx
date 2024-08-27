import { ReactNode } from "react";
import Modal from "../Modal";

import styles from "./ModalRequestsStarWars.module.css";

export interface IModalProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
  children: ReactNode;
}
const ModalRequestsContainer = ({
  isVisible,
  setIsVisible,
  children,
}: IModalProps) => {
  return (
    <Modal
      disable={false}
      isOpen={isVisible}
      onClose={() => setIsVisible(false)}
      zIndex={"100"}
      className={styles.requestsStarWars}
    >
      <div className={styles.requestsStarWars_block}>
        <form className={styles.formModalRequests}>{children}</form>
      </div>
    </Modal>
  );
};

export default ModalRequestsContainer;
