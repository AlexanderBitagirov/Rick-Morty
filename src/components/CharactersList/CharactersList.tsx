import { useState } from "react";
import { ISingleCharacter } from "../../interfaces/SingleCharacter.interfacer";
import CardCharacter from "../Card/Card";
import CustomDialog from "../CustomDialog/CustomDialog";

import styles from "./CharactersList.module.css";
import { IResults } from "./CharactersList.props";

const CharactersList = ({results}: IResults): JSX.Element => {

  const [activeDialog, setActive] = useState<boolean>(false);
  const [current, setCurrent] = useState<ISingleCharacter | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {results && results.map(el => (
          <CardCharacter
            key={el.id}
            data={el}
            setActive={setActive}
            setCurrent={setCurrent}
          />
        ))}
      </div>
      {current && (
        <CustomDialog active={activeDialog} setActive={setActive}>
          <div>Name: {current.name}</div>
          <div>Status: {current.status}</div>
          <div>Species: {current.species}</div>
          <div>Gender: {current.gender}</div>
          {current.type && <div>Type: {current.type} </div>}
        </CustomDialog>
      )}
    </div>
  );
};

export default CharactersList;
