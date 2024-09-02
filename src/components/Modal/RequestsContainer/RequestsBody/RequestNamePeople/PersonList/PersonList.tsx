import { useState } from "react";
import { Person } from "../../../../../../interfaces";
import Ptag from "../../../../../ui/Ptag/Ptag";
import styles from "./PersonList.module.css";
import PopUp from "../../../../../ui/PopUp/PopUp";
import useClickOutside from "../../../../../../hooks/useClickOutside";

type PersonListProps = {
  personList: Person[];
};

const PersonList = ({ personList }: PersonListProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [personName, setPersonName] = useState<string | null>(null);

  const domNode = useClickOutside(() => setIsVisible(false));

  const handleOpenPopUp = (name: string) => {
    setIsVisible((prev) => !prev);
    setPersonName(name);
  };
  return (
    <div ref={domNode} className={styles.personList}>
      {personList.map((person) => (
        <div
          key={person.url}
          className={styles.personList}
          onClick={() => handleOpenPopUp(person.name)}
        >
          <Ptag size="m">{person.name}</Ptag>

          {personName === person.name && (
            <PopUp isVisible={isVisible}>
              <li>{person.birth_year}</li>
              <li>{person.gender}</li>
              <li>{person.height}</li>
              <li>{person.skin_color}</li>
              <li>{person.mass}</li>
            </PopUp>
          )}
        </div>
      ))}
    </div>
  );
};

export default PersonList;
