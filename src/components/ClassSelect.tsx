import React from 'react';
import ArchetypeCard from './ArchetypeCard';

interface ArchetypeProps {
  archetypes: {
    [archetypeName: string]: string[];
  };
}

const ClassSelect = (props: ArchetypeProps): JSX.Element => {
  return (
    <>
      {Object.keys(props.archetypes).map((currentArchetype:string, index:number) => {
        <ArchetypeCard archetype={props.archetypes[currentArchetype]} key={index} />
      })}
    </>
  );
};

export default ClassSelect;
