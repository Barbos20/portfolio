import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import Title from '../components/title/Title.js'
import todolist from '../assect/img/todolist.png'
import DC from '../assect/img/cards.png'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


function Projects(props) {
  const iconStyle = (logo) => ({
    backgroundImage: 'url(' + logo + ')',
  });
  const myProject = [
    {
      icon: iconStyle(todolist), title: 'Todolist',
      description: 'SPA for managing to-do lists and their items. Implemented: add todolist / task, remove todolist / task, rename todolist / task, marking the completed task, displaying all / active / confirmed tasks in todolist.',
      rerender: 'https://barbos20.github.io/todolist/'
    },
    {
      icon: iconStyle(DC), title: 'Cards project',
      description: 'SPA for card training. Features: login page with login and password verification; registration page with data verification; password reset page with password verification; 404 page; profile page with the ability to: edit your profile data (change avatar and nickname), add a new set of cards and edit, search, sort, view, delete and explore card packs; page with a list of decks with the ability to: search, sort, view and study any deck of cards; a tutorial page with the ability to answer a question and rate your answer.',
      rerender: 'https://katrainer.github.io/cards'
    }
  ]




  return (
    <div id={'projects'} className={style.projectsBlock}>
      <Fade>
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
          <Title title={'My projects'} />
            <navbar className={style.projects}>
              {myProject.map(p => <Project key={p.title} style={p.icon} title={p.title}
                description={p.description} technologies={p.technologies} rerender={p.rerender} />)}
            </navbar>
        </div>
      </Fade>
    </div>
  );
}
export default Projects;