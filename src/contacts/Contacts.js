import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';

function Contacts() {
  return (
    <div className={style.contactsContainer}>
      <div className={`${styleContainer.container} ${style.contacts}`}>
        <h3>Contacts</h3>
        <div className={style.form}>
          <form>
          <input value='name'/>
          <input value='surname'/>
          <textarea>Message</textarea>
          </form>
        </div>
        <button>Send</button>
      </div>
    </div>
  );
}
export default Contacts;
