import React from 'react';
import style from './Nav.module.scss';
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from 'react-scroll';

function Nav() {
  return (
    <Fade top cascade>
      <div className={style.nav}>
        <Link
          activeClass={style.active}
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Home</Link>
        <Link
          activeClass={style.active}
          to="skills"
          spy={true}
          smooth={true}
          offset={1}
          duration={500}
        >Skills</Link>
        <Link
          activeClass={style.active}
          to="projects"
          spy={true}
          smooth={true}
          offset={1}
          duration={500}
        >Projects</Link>
        <Link
          activeClass={style.active}
          to="info"
          spy={true}
          smooth={true}
          offset={0}
          duration={1}
        >Info</Link>
      </div>
    </Fade>
  );
}

export default Nav;
