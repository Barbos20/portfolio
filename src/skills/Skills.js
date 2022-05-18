import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';
import Title from '../components/title/Title.js'
import cssLogo from '../assect/img/icons/css-3.svg';
import reactLogo from '../assect/img/icons/react-2.svg';
import reduxLogo from '../assect/img/icons/redux.svg';
import htmlLogo from '../assect/img/icons/html-1.svg';
import tsLogo from '../assect/img/icons/typescript.svg';
import jsLogo from '../assect/img/icons/logo-javascript.svg';
import gitHub from '../assect/img/icons/github_logo.svg';
import formik from '../assect/img/icons/formik.svg'
import UI from '../assect/img/icons/material-ui-seeklogo.com.svg'
import Fade from 'react-reveal/Fade';


function Skills() {
  const iconStyle = (logo) => ({
    backgroundImage: 'url(' + logo + ')',
});

  const skills = [
    {
      title: 'HTML',
      description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
      icon: iconStyle(htmlLogo)
    },
    {
      title: 'CSS',
      description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
      icon: iconStyle(cssLogo)
    },
    {
      title: 'JS',
      description: 'JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. TypeScript is a strict syntactical superset of JavaScript and adds optional static typing to the language.',
      icon: iconStyle(jsLogo)
    },{
      title: 'TS',
      description: 'JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. TypeScript is a strict syntactical superset of JavaScript and adds optional static typing to the language.',
      icon: iconStyle(tsLogo)
    },
    {
      title: 'React',
      description: 'React is JavaScript library for building user interfaces. Redux is Predictable State Container for JS Apps.',
      icon: iconStyle(reactLogo)
    },
    {
      title: 'Redux',
      description: 'React is JavaScript library for building user interfaces. Redux is Predictable State Container for JS Apps.',
      icon: iconStyle(reduxLogo)
    },
    {
      title: 'Material-UI',
      description: 'Redux is Predictable State Container for JS Apps',
      icon: iconStyle(UI)
    },
    
    {
      title: 'Formik',
      description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
      icon: iconStyle(formik)
    },
    {
      title: 'GitHub',
      description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
      icon: iconStyle(gitHub)
    },
  ]
  return (
    <div id={'skills'}className={style.skillsBlock}>
      <Fade>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title title={'My skills'} />
        <div className={style.skills}>
        {skills.map(s => <Skill key={s.title}
                                           title={s.title}
                                           icon={s.icon}
                                           description={s.description}/>
                    )}
        </div>
      </div>
      </Fade>
    </div>
  );
}
export default Skills;
