import React from 'react';
import s from './Skill.module.scss';


const Skill = (props) => {
    return (
        <div>
            <div className={s.skill}>
                <div style={props.icon} className={s.icon}></div>
                <h3 className={s.title}>{props.title}</h3>
                {/*<span className={style.description}>{props.description}</span>*/}
            </div>
        </div>
    );
}
export default Skill;