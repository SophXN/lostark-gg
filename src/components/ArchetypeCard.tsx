import React from 'react';
import { AdvancedClass, Archetype } from '../App';
import ClassCard from './ClassCard';

interface ArchetypeProps {
  archetype: Archetype;
  className?: string;
}

const ArchetypeCard = (props: ArchetypeProps): JSX.Element => {
  return (
    <>
      <div>
        {props.archetype.name}
        {props.archetype.advanced.map((advancedClass:AdvancedClass, index: number) => (
          <ClassCard currentClass={advancedClass} key={index} />
        ))}
      </div>
    </>
  );
};

export default ArchetypeCard;
