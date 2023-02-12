import React from 'react';
import style from "../Contact/Contact.module.scss";
import {Button} from "@mui/material";
import CustomizedInputs from "./InputCustomization";

const Contact = () => {
    return (
        <div className={style.contackBlock}>
            <div className={style.container}>
                <div className={style.wrapperTitleAndForm}>
                    <div className={style.contactTitle}>Contact</div>
                    <div className={style.inputBlock}>
                        <CustomizedInputs label="Your name" style={{display: 'inline-block', marginBottom: '10px'}}/>
                        <CustomizedInputs label="Your email" style={{display: 'inline-block', marginBottom: '10px'}}/>
                        <CustomizedInputs label="Your message..."
                                          style={{display: 'inline-block', marginBottom: '10px'}}/>
                        <Button className={style.buttonContact} variant="contained">Send message</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;