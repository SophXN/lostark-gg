import React from 'react';
import { AdvancedClass, Archetype } from '../App';
import ClassCard from './ClassCard';

interface ArchetypeProps {
  archetype: Archetype;
  className?: string;
  chooseClass: (currentClass: AdvancedClass) => void;
}

const ArchetypeCard = (props: ArchetypeProps): JSX.Element => {
  return (
    <>
      <div className="classContainer">
        <h2>{props.archetype.name}</h2>
        <div className="archCard">
          {props.archetype.advanced.map(
            (advancedClass: AdvancedClass, index: number) => (
              <ClassCard
                advancedClass={advancedClass}
                key={index}
                chooseClass={props.chooseClass}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ArchetypeCard;
