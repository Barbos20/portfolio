  import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import TG from '../assect/img/icons/telegram.svg';
import Contact from './contact/Contact';
import gitHub from '../assect/img/icons/github_logo.svg';
import link from '../assect/img/icons/linkedin.svg';


function Footer() {
    const iconStyle = (logo) => ({
      backgroundImage: 'url(' + logo + ')',
  });
  
    const contact = [
      {
        icon: iconStyle(TG)
      },
      {
        icon: iconStyle(gitHub)
      },
      {
        icon: iconStyle(link)
      },
      {
        icon: iconStyle(link)
      },
    ]
    return (
      <div className={style.footerBlock}>
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
        
        <h3 className={style.footer}>© 2022. All rights reserved.</h3>
          <span className={style.partImg}>
          {contact.map(c => <Contact key={c.title} 
                                             icon={c.icon}/>
                      )}
          </span>
          <p className={style.footer}> KOROL ARTHUR </p>
        </div>
      </div>
    );
  }
  export default Footer;