import React, { MouseEvent } from 'react'
import { AdvancedClass, Skills } from '../App'

interface BuildThumbProps {
  skill: Skills;
  deselectSkill: (e: MouseEvent<HTMLImageElement>) => void;
}

const BuildPalette = (props: BuildThumbProps): JSX.Element => {
  return(
    <>
      <img src={props.skill.icon} alt={props.skill.name} onClick={(e) => props.deselectSkill(e)}/>
    </>
  )
}

export default BuildPalette