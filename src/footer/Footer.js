import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Sponsors from '../footer/sponsors/Sponsors';

function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={`${styleContainer.container} ${style.footer}`}>
        <div className={style.info}>
          PROJECT BY KOROL ARTHUR
        <div className={style.part}>
<div className={style.partImg}>
  <Sponsors title={'im sponsor'}/>
  <Sponsors title={'im sponsor'}/>
  <Sponsors title={'im sponsor'}/>
  <Sponsors title={'im sponsor'}/>
</div>
        </div>
        © 2021 ALL RIGHTS RESERVED
      </div>
      </div>
    </div>
  );
}
export default Footer;