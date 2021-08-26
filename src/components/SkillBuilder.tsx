import React, { MouseEvent, useState } from 'react';
import { AdvancedClass, Skills } from '../App';
import SkillThumbs from './SkillThumbs';

interface BuilderProps {
  currentClass: AdvancedClass;
}

const SkillBuilder = (props: BuilderProps): JSX.Element => {
  const [availableSkills, updateAvailable] = useState(
    props.currentClass.skills?.slice()
  );
  const [chosenSkills, updateChosen] = useState<Array<any>>([]);

  const selectSkill = (e: MouseEvent<HTMLImageElement>): void => {
    const target = e.target as HTMLImageElement;
    const selection = target.getAttribute('alt');
    if (chosenSkills.length < 8) {
      console.log(selection);
      updateAvailable(
        availableSkills?.filter((skill) => skill.name !== selection)
      );
      updateChosen([
        ...chosenSkills,
        props.currentClass.skills?.filter(
          (skill) => skill.name === selection
        )[0],
      ]);
    } else {
      alert('You can only select 8 skills in Lost Ark!');
    }
  };

  const deselectSkill = (e: MouseEvent<HTMLImageElement>): void => {
    const target = e.target as HTMLImageElement;
    const selection = target.getAttribute('alt');
    updateAvailable([
      ...(availableSkills as Array<any>),
      props.currentClass.skills?.filter((skill) => skill.name === selection)[0],
    ]);

    updateChosen(chosenSkills?.filter((skill) => skill.name !== selection));
  };

  return (
    <>
      <h3>{props.currentClass.name}</h3>
      <p>Available Skills</p>
      {availableSkills?.map((skill, index) => (
        <SkillThumbs
          skill={skill}
          key={index}
          selectSkill={selectSkill}
          deselectSkill={deselectSkill}
        />
      ))}
      <p>Your Build</p>
      {chosenSkills?.map((skill, index) => (
        <SkillThumbs
          skill={skill}
          key={index}
          selectSkill={selectSkill}
          deselectSkill={deselectSkill}
        />
      ))}
    </>
  );
};

export default SkillBuilder;
