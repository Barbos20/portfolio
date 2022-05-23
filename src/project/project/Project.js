import React from 'react';
import style from './Project.module.scss';


function Project(props) {
  return (
    <div className={style.project}>
        <div  className={style.projectIcon} style={props.style}>
          <a href={props.rerender} className={style.viewBtn}>Open</a>
        </div>
        <div className={style.projectInfo}>
        <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
            </div>
        </div>
  );
}
export default Project;