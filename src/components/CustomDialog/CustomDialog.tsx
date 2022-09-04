import styles from "./CustomDialog.module.css";
import { ICustomDialog } from "./CustomDialog.props";
import cn from "classnames";

const CustomDialog = ({
  active,
  setActive,
  children,
  ...props
}: ICustomDialog): JSX.Element => {
  return (
    <div
      className={cn(styles.dialog, active, { [styles.active]: active })}
      onClick={() => {
        setActive(false);
      }}
      {...props}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default CustomDialog;
