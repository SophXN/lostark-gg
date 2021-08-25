import React from 'react'
import ClassCard from './ClassSelect'

type ArchetypeProps = {
  archetype: string[];
}

const ArchetypeCard = ({ archetype }: ArchetypeProps): JSX.Element => {
  return(
    <>
      <div>
        {archetype.map((job) => (
          <ClassCard currentClass={job} />
        ))}
      </div>
    </>
  )
}

export default ArchetypeCard