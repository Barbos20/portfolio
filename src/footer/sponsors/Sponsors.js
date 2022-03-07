import React from 'react';
import style from './Sponsors.module.scss';


function Sponsors(props) {
  return (
    <div className={style.sponsorContainer}>
      <div className={style.sponsor}>
          {props.title}
      </div>
    </div>
  );
}
export default Sponsors;