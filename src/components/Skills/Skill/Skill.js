import React from 'react';
import style from './Skill.module.scss'

const Skill = (props) => {

    return (
        <div className={style.skillBlock}>
            <div className={style.icon} style={props.icon}></div>
            <div className={style.nameSkill}>
                {props.name}
            </div>
        </div>
    );
};

export default Skill;