// import React from 'react';
// import style from './Footer.module.scss';
// import styleContainer from '../common/styles/Container.module.css';
// import Sponsors from '../footer/sponsors/Sponsors';
// import TG from '../assect/img/icons/telegram.svg'

// function Footer() {
//     const telega = {
//         backgroundImage: `url(${TG})`
//       }
    

//   return (
//     <div className={style.footerContainer}>
//       <div className={`${styleContainer.container} ${style.footer}`}>
//         <div className={style.by}>PROJECT BY KOROL ARTHUR</div>
//         <div className={style.partImg}>
//           <Sponsors style={telega} />
//           <Sponsors title={'im sponsor'} />
//           <Sponsors title={'im sponsor'} />
//           <Sponsors title={'im sponsor'} />
//         </div>
//         <div className={style.info}>© 2021 ALL RIGHTS RESERVED</div>
//       </div>
//     </div>
//   );
// }
// export default Footer;


import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Title from '../components/title/Title.js'
import cssLogo from '../assect/img/icons/css-3.svg';
import TG from '../assect/img/icons/telegram.svg';
import Contact from './contact/Contact';


function Footer() {
    const iconStyle = (logo) => ({
      backgroundImage: 'url(' + logo + ')',
  });
  
    const contact = [
      {
        icon: iconStyle(TG)
      },
      {
        icon: iconStyle(TG)
      },
      {
        icon: iconStyle(TG)
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