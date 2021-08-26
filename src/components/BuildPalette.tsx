import React, { MouseEvent } from 'react';
import { AdvancedClass, Skills } from '../App';
import { Tooltip } from '@material-ui/core';

interface BuildThumbProps {
  skill: Skills;
  deselectSkill: (e: MouseEvent<HTMLImageElement>) => void;
}

const BuildPalette = (props: BuildThumbProps): JSX.Element => {
  return (
    <>
      <Tooltip title={`${props.skill.name}`}>
        <img
          src={props.skill.icon}
          alt={props.skill.name}
          onClick={(e) => props.deselectSkill(e)}
        />
      </Tooltip>
    </>
  );
};

export default BuildPalette;
