import React from 'react';
import { AdvancedClass, Archetypes } from '../App';
import ArchetypeCard from './ArchetypeCard';

interface ArchetypeProps {
  archetypes: Archetypes;
  chooseClass: (currentClass: AdvancedClass) => void;
}

const ClassSelect = (props: ArchetypeProps): JSX.Element => {
  return (
    <>
      {props.archetypes.map(
        (classObj, index): JSX.Element => (
          <ArchetypeCard
            className="archCard"
            archetype={classObj}
            key={index}
            chooseClass={props.chooseClass}
          />
        )
      )}
    </>
  );
};

export default ClassSelect;
