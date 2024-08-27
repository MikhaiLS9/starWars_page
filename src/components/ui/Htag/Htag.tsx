import { HtagProps } from "./Htag.props";

import cn from "classnames";
import styles from "./Htag.module.css";

const Htag = ({ tag, children, className, onClick }: HtagProps) => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cn(styles.h1, className)} onClick={onClick}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={cn(styles.h2, className)} onClick={onClick}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={cn(styles.h3, className)} onClick={onClick}>
          {children}
        </h3>
      );
    default:
      <> </>;
  }
};

export default Htag;
