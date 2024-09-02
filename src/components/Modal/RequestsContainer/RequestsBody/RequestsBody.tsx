import { PropsWithChildren } from "react";

// import styles from "./RequestsBody.module.css";

type ModuleRequestsBodyProps = PropsWithChildren;

const ModuleRequestsBody = ({ children }: ModuleRequestsBodyProps) => {
  return <>{children}</>;
};

export default ModuleRequestsBody;
