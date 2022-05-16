import React from 'react';
import style from './Main.module.scss';
import Fade from 'react-reveal/Fade';




function Main() {
    return (
        <div id={'home'}className={style.mainBlock}>

            <div className={style.container}>
            <Fade left cascade>
                <div >
                <h1>Welcome There!
                    <br />I'm Korol Arthur</h1>
                <p>I'm a front-end developer with experience 
                <br />building SPA's with Reack/Redux/Typescript. 
                <br />In my spare time, I work on improving 
                <br />the skills acquired during training.</p>
                </div>
                </Fade>
                <Fade right cascade>
                <div className={style.photo}>
                    <div className={style.image} />
                </div>
                </Fade>



            </div>

        </div>

    );
}



export default Main;
