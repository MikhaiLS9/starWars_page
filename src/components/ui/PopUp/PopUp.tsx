import React from "react";
import styles from "./PopUp.module.css";

type PopUpProps = {
  isVisible: boolean;
  children: React.ReactNode;
};

const PopUp = ({ isVisible, children }: PopUpProps) => {
  if (!isVisible) return null;

  return <div className={styles.popup}>{children}</div>;
};

export default PopUp;
