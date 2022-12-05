import React from 'react';
import style from './Project.module.css'

const Project = (props) => {
    return (
        <div className={style.ProjectBlock}>
            <div style={props.images} className={style.imagesProject}></div>
            <div className={style.titleProject}>{props.titleProject}</div>
            <div className={style.aboutProject}>{props.aboutProject}</div>
        </div>
    );
};

export default Project;