import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';
import Title from '../components/title/Title.js'

function Skills() {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title title={'My skills'}/>
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
