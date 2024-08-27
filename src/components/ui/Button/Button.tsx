import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css";

const Button = ({
  type = "submit",
  className,
  children,
  appearance,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(styles.button, styles[appearance], className, {})}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
