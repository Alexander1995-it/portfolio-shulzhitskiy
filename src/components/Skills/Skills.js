import React from 'react'
import Skill from "./Skill/Skill";
import style from './Skills.module.scss'
import javaScript from './iconsSkills/java-script-svgrepo-com.svg'
import html from './iconsSkills/html-fill-svgrepo-com.svg'
import reactIcon from './iconsSkills/react-svgrepo-com.svg'
import reduxIcon from './iconsSkills/redux-svgrepo-com.svg'
import cssIcon from './iconsSkills/css-svgrepo-com.svg'
import gitIcon from './iconsSkills/git-svgrepo-com.svg'
import tsIcon from './iconsSkills/typescript-svgrepo-com.svg'
import muiIcon from './iconsSkills/material-ui-svgrepo-com.svg'
import axiosIcon from './iconsSkills/rest-api-svgrepo-com.svg'
import testIcon from './iconsSkills/test-svgrepo-com.svg'


const Skills = () => {

    const skills = [
        {name: 'HTML5', icon: {backgroundImage: `url(${html})`}},
        {name: 'CSS', icon: {backgroundImage: `url(${cssIcon})`}},
        {name: 'JavaScript', icon: {backgroundImage: `url(${javaScript})`}},
        {name: 'TypeScript', icon: {backgroundImage: `url(${tsIcon})`}},
        {name: 'React', icon: {backgroundImage: `url(${reactIcon})`}},
        {name: 'Redux', icon: {backgroundImage: `url(${reduxIcon})`}},
        {name: 'Git', icon: {backgroundImage: `url(${gitIcon})`}},
        {name: 'Material UI', icon: {backgroundImage: `url(${muiIcon})`}},
        {name: 'Axios', icon: {backgroundImage: `url(${axiosIcon})`}},
        {name: 'Unit test', icon: {backgroundImage: `url(${testIcon})`}},
    ]
    return (
        <div className={style.skillsBlock}>
            {skills.map(skill => <div className={style.skillItem}>
                <Skill name={skill.name} icon={skill.icon}/>
            </div>)}

        </div>
    )
}

export default Skills