import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import pictures from '../assect/img/IMG_0183.jpg'


function Main() {
  const me ={
    backgroundImage: `url (${pictures})`
  }
  return (
    <div className={style.mainBlock}>
      <div className={styleContainer.container}>
        <div className={style.text} >
        <h1><span> Hi there</span>
        <br/>
          I am Korol Arthur</h1>
          <h2>Front-end Developer</h2>
        </div>
        
        <div className={style.photo}></div>
      </div>
    </div>
  );
}
export default Main;
