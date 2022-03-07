import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import Title from '../components/title/Title.js'
import todolist from '../assect/img/open-plan-working.jpg'
import DC from '../assect/img/DC.webp'
import Marvel from '../assect/img/Marvel.webp'
// import Body from '../assect/img/gum.png'

function Projects(props) {
const tdl ={
  backgroundImage: `url(${todolist})`
}
const DCmovie ={
  backgroundImage: `url(${DC})`
}
const MV ={
  backgroundImage: `url(${Marvel})`
}
// const GYM ={
//   backgroundImage: `url(${Body})`
// }


  return (
    <div className={style.projectsBlock}>
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
<Title title={'My projects'}/>
<div className={style.projects}>
<Project style={tdl} title={'TodoList'} description={'bla bla bla bla bla bla bla bla bla '}/>
<Project style={DCmovie} title={'DC'} description={'bla bla bla bla bla bla bla bla bla bla bla bla '}/>
<Project style={MV} title={'Marvel'} description={'bla bla bla bla bla bla bla bla '}/>
{/* <Project style={GYM} title={'Gym'} description={'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '}/> */}
</div>
        </div>
    </div>
  );
}
export default Projects;