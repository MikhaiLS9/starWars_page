import { useState } from "react";
import { Person } from "../../../../../../interfaces";

import Ptag from "../../../../../ui/Ptag/Ptag";
import PopUp from "../../../../../ui/PopUp/PopUp";
import useClickOutside from "../../../../../../hooks/useClickOutside";

import styles from "./PersonList.module.css";

type PersonListProps = {
  personList: Person;
};

const PersonList = ({ personList }: PersonListProps) => {
  const { name, url, birth_year, gender, mass, height, skin_color } =
    personList;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const domNode = useClickOutside(() => setIsVisible(false));
  return (
    <div
      ref={domNode}
      key={url}
      className={styles.personList}
      onClick={() => setIsVisible((prev) => !prev)}
    >
      <Ptag size="m">{name}</Ptag>

      <PopUp isVisible={isVisible}>
        <li className={styles.personList_item}>
          <Ptag size="m">birth_year</Ptag>
          <Ptag size="m">{birth_year}</Ptag>
        </li>
        <li className={styles.personList_item}>
          <Ptag size="m">gender</Ptag>
          <Ptag size="m">{gender}</Ptag>
        </li>
        <li className={styles.personList_item}>
          <Ptag size="m">height</Ptag>
          <Ptag size="m">{height}</Ptag>
        </li>
        <li className={styles.personList_item}>
          <Ptag size="m">skin_color</Ptag>
          <Ptag size="m">{skin_color}</Ptag>
        </li>
        <li className={styles.personList_item}>
          <Ptag size="m">mass</Ptag>
          <Ptag size="m">{mass}</Ptag>
        </li>
      </PopUp>
    </div>
  );
};

export default PersonList;
