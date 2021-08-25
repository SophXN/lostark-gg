import React from 'react'
import ClassCard from './ClassCard'

interface ArchetypeProps {
  archetype: string[];
}

const ArchetypeCard = (props: ArchetypeProps): JSX.Element => {
  return(
    <>
      <div>
        {props.archetype.map((job, index) => (
          <ClassCard currentClass={job} key={index} />
        ))}
      </div>
    </>
  )
}

export default ArchetypeCard