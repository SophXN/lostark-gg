import React from 'react'
import ArchetypeCard from './ArchetypeCard'

interface ArchetypeProps {
  currentArchetype: string[];
}

const ClassSelect = ({currentArchetype}: ArchetypeProps): JSX.Element => {
  return(
    <>
      <ArchetypeCard archetype={currentArchetype} />
    </>
  )
}

export default ClassSelect