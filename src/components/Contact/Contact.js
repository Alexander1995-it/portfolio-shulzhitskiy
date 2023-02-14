import React from 'react'
import style from "../Contact/Contact.module.scss"
import {Button} from "@mui/material"
import CustomizedInputs from "./InputCustomization"
import instagramIcon from './iconsContact/instagram-svgrepo-com.svg'
import linkedInIcon from './iconsContact/linkedin-rounded-svgrepo-com.svg'
import gitIcon from './iconsContact/git-svgrepo-com.svg'
import telegramIcon from './iconsContact/telegram-svgrepo-com.svg'
import Zoom from 'react-reveal/Zoom'



const Contact = () => {
    const instagramImage = {
        backgroundImage: `url(${instagramIcon})`
    }

    const linkedInImage = {
        backgroundImage: `url(${linkedInIcon})`
    }
    const telegramImage = {
        backgroundImage: `url(${telegramIcon})`
    }

    const gitImage = {
        backgroundImage: `url(${gitIcon})`
    }
    return (
        <div className={style.contackBlock}>
            <div className={style.container}>
              <Zoom>
                  <div className={style.wrapperContact}>
                      <div className={style.rowForm}>
                          <div className={style.wrapperTitleAndForm}>
                              <div className={style.contactTitle}>Contact</div>
                              <div className={style.inputBlock}>
                                  <CustomizedInputs label="Your name"
                                                    style={{display: 'inline-block', marginBottom: '10px'}}/>
                                  <CustomizedInputs label="Your email"
                                                    style={{display: 'inline-block', marginBottom: '10px'}}/>
                                  <CustomizedInputs label="Your message..."
                                                    style={{display: 'inline-block', marginBottom: '10px'}}/>
                                  <Button className={style.buttonContact} variant="contained">Send message</Button>
                              </div>
                          </div>
                      </div>
                      <div className={style.rowFooter}>
                          <div className={style.wrapperFooter}>
                              <div className={style.contentFooter}>
                                  <div className={style.wrapperIcons}>
                                      <div className={style.icon} style={instagramImage}></div>
                                      <div className={style.icon} style={linkedInImage}></div>
                                      <div className={style.icon} style={gitImage}></div>
                                      <div className={style.icon} style={telegramImage}></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </Zoom>
            </div>
        </div>
    );
};

export default Contact;