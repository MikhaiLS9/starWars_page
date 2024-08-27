import { PtagProps } from "./Ptag.props";

import styles from "./Ptag.module.css";
import cn from "classnames";

const Ptag = ({
  children,
  size,
  isError,
  className,
  isBold,
  ...props
}: PtagProps) => {
  return (
    <p
      className={cn(styles.p, styles[size], className, {
        [styles.isError]: isError,
        [styles.bold]: isBold,
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Ptag;
