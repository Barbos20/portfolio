import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';


function Projects() {
  return (
    <div className={style.projectsBlock}>
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
<h2 className={style.title}>My project</h2>
<div className={style.project}>
<Project title={'TodoList'} description={'bla bla bla bla bla bla bla bla bla '}/>
<Project title={'DC'} description={'bla bla bla bla bla bla bla bla bla bla bla bla '}/>
<Project title={'Marvel'} description={'bla bla bla bla bla bla bla bla '}/>
<Project title={'Gym'} description={'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '}/>
</div>
        </div>
    </div>
  );
}
export default Projects;