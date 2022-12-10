import React from 'react';
import style from './AboutMe.module.scss'
import myImage from './../../image/my_image.jpg'
import iconInstagram from './../../common/icons/instagram-svgrepo-com.svg'
import Zoom from 'react-reveal/Zoom'


const AboutMe = () => {
    const myImages = {
        backgroundImage: `url(${myImage})`
    }
    return (
        <div id='aboutMe' className={style.aboutMeBlock}>
            <div className={style.container}>
                <Zoom>
                    <div className={style.aboutMeWrapper}>
                        <div style={myImages} className={style.imagesBlock}></div>
                        <div className={style.aboutMeTextBlock}>
                            <div className={style.aboutMeName}>Alexander Shulshytskiy</div>
                            <div className={style.aboutMeProfession}>Frontend developer</div>
                            <div className={style.aboutMeText}>
                                Formik takes care of the repetitive and annoying stuff—keeping track of
                                values/errors/visited fields, orchestrating validation, and handling submission—so you
                                don't have to. This means you spend less time wiring up state and change handlers and
                                more time focusing on your business logic.
                            </div>
                            <div className={style.iconInstagram}>
                                <img src={iconInstagram} alt=""/>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default AboutMe;