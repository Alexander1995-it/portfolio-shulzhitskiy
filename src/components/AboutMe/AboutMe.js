import React from 'react';
import style from './AboutMe.module.scss'
import myImage from './../../image/my_image.jpg'
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
                                I am a frontend developer with experience in creating web applications, using React / Redux.
                                I am improving my skills in this direction and expanding them with the help of new technologies also in my free time i improve my English.
                                I know how to work in a team. Open to your suggestions. I am ambitious and hard-working.
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default AboutMe;