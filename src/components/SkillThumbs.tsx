import { Tooltip } from '@material-ui/core';
import React, { MouseEvent } from 'react';
import { AdvancedClass, Skills } from '../App';

interface SkillThumbProps {
  skill: Skills;
  selectSkill: (e: MouseEvent<HTMLImageElement>) => void;
}

const SkillThumbs = (props: SkillThumbProps): JSX.Element => {
  return (
    <>
      <Tooltip title={`${props.skill.name}`} >
        <img
          src={props.skill.icon}
          alt={props.skill.name}
          onClick={(e) => props.selectSkill(e)}
        />
      </Tooltip>
    </>
  );
};

export default SkillThumbs;
