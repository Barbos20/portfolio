import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import Title from '../components/title/Title.js'
import todolist from '../assect/img/open-plan-working.jpg'
import DC from '../assect/img/DC.webp'
import Fade from 'react-reveal/Fade';


function Projects(props) {
  const tdl = {
    backgroundImage: `url(${todolist})`
  }
  const DCmovie = {
    backgroundImage: `url(${DC})`
  }
  


  return (
    <div id={'projects'}className={style.projectsBlock}>
      <Fade>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>       
        <Title title={'My projects'} />
        <navbar className={style.projects}>
          <Project style={tdl} title={'TodoList'} description={'SPA for managing to-do lists and their items. Features: adding / deleting a task, renaming a task, highlighting a completed task, displaying all / active / confirmed tasks in the todo list.'} />
          <Project style={DCmovie} title={'Cards'} description={'SPA for card training. Features: login page with login and password verification; registration page with data verification; password reset page with password verification; 404 page; profile page with the ability to: edit your profile data (change avatar and nickname), add a new set of cards and edit, search, sort, view, delete and explore card packs; page with a list of decks with the ability to: search, sort, view and study any deck of cards; a tutorial page with the ability to answer a question and rate your answer.'} />
          {/* <Project style={tdl} title={'In development'} description={'In development'} /> */}
        </navbar>        
      </div>
      </Fade>
    </div>
  );
}
export default Projects;