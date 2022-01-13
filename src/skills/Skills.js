import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';

function Skills() {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>My skills</h2>
        <div className={style.skills}>
          <Skill title={'JS'} description={'What? What? What? What? What? What? What? What? What? What? What? '}/>
          <Skill title={'CSS'} description={'What? What? What? What? What? What? What? What? What? What? What? '}/>
          <Skill title={'React'} description={'What? What? What? What? What? What? What? What? What? What? What? '}/>
        </div>
      </div>
    </div>
  );
}
export default Skills;
