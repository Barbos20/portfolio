import React from 'react';
import style from './Main.module.scss';

// import styleContainer from '../common/styles/Container.module.css'



function Main() {
    return (

        // <div className={style.mainBlock}>
        //   <div className={style.container}>
        //     <div className={style.greeting} >
        //     <h1><span> Hi there</span>
        //     <br/>
        //       I am Korol Arthur</h1>
        //       <h2>Front-end Developer</h2>
        //     </div>
        //     <div className={style.photo}>
        //       <div className={style.image}/>
        //     </div>
        //   </div>
        // </div>



        <div className={style.mainBlock}>

            <div className={style.container}>
                {/* <div className={style.animated-back}></div> */}
                <div >
                <h1>Welcome There!
                    <br />I'm Korol Arthur</h1>
                <p>I'm a front-end developer with experience 
                <br />building SPA's with Reack/Redux/Typescript. 
                <br />In my spare time, I work on improving 
                <br />the skills acquired during training.</p>
                </div>
                <div className={style.photo}>
                    <div className={style.image} />
                </div>



            </div>

        </div>

    );
}



export default Main;
