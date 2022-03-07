import React from 'react';
import style from './Skill.module.scss';



function Skill(props) {
  return (
    <div className={style.skill}>
        <div className={style.icon}>
        </div>
        <div className={style.name}>
        <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
            
    </div>
  );
}
export default Skill;