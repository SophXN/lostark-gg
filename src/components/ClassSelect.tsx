import React from 'react';
import { Archetypes } from '../App';
import ArchetypeCard from './ArchetypeCard';

interface ArchetypeProps {
  archetypes: Archetypes
}

const ClassSelect = (props: ArchetypeProps): JSX.Element => {
  return (
    <>
      Classes
      {
        props.archetypes.map((classObj, index): JSX.Element => (
          <ArchetypeCard className="archCard" archetype={classObj} key={index} />
        ))
      }
    </>
  );
};

// {Object.keys(props.archetypes).map((currentArchetype:string, index:number) => {
//   <ArchetypeCard archetype={props.archetypes[currentArchetype]} key={index} />
// })}

export default ClassSelect;
