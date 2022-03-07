import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css';

function Contacts() {
  return (
    <div className={style.contactsContainer}>
      <div className={`${styleContainer.container} ${style.contacts}`}>
        <div className={style.title}>
        <h3>Contacts</h3>
        </div>
        <div className={style.form}>
          <form>
          <input value='name'/>
          <input value='surname'/>
          <textarea>Message</textarea>
          <button>Send</button>
          </form>
    </div>
    </div>
    </div>
  );
}
export default Contacts;
