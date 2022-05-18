  import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import TG from '../assect/img/icons/telegram.svg';
import Contact from './contact/Contact';
import gitHub from '../assect/img/icons/github_logo_copy.svg';
import link from '../assect/img/icons/linkedin.svg';
import Fade from 'react-reveal/Fade';


function Footer() {
    const iconStyle = (logo) => ({
      backgroundImage: 'url(' + logo + ')',
  });
  
    const contact = [
      {
        icon: iconStyle(TG),
        rerender:'https://t.me/KingArturchik'
      },
      {
        icon: iconStyle(link),
        rerender:'https://www.linkedin.com/in/kingarturchik/'
      },
      {
        icon: iconStyle(gitHub),
        rerender: 'https://github.com/Barbos20'
      },
    ]
    return (
      <div id={'info'}className={style.footerBlock}>
        <Fade bottom cascade>
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <h3 className={style.footer}>© 2022. All rights reserved.</h3>        
          <span className={style.partImg}>
                {contact.map(c => <div key={c.rerender} to={c.rerender} className={style.containerForBlock} s>
                        <a href={c.rerender} style={c.icon} className={style.block}></a>
                    </div>)}      
          </span>         
          <p className={style.footer}> KOROL ARTHUR </p>
        </div>
        </Fade>
      </div>
    );
  }
  export default Footer;