import React from 'react';
import s from './Contact.module.scss';


const Contact = (props) => {
    return (
        <div>
            <div className={s.contact}>
                <div style={props.icon} className={s.icon}></div>
            </div>
        </div>
    );
}
export default Contact;