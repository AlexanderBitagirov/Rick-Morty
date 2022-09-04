import { CardCharacterProps } from "./Card.props";
import styles from "./Card.module.css";
import { Button } from "@mui/material";

const CardCharacter = ({
  data,
  setActive,
  setCurrent,
  ...props
}: CardCharacterProps): JSX.Element => {
  const changeState = () => {
    setCurrent(data);
    setActive(true);
  };

  return (
    <div className={styles.cardCharacter} {...props}>
      <img src={data.image} alt="Avatar" />
      <p className={styles.cardCharacterText}>{data.name}</p>
      <Button onClick={changeState}> Подробнее </Button>
    </div>
  );
};

export default CardCharacter;
