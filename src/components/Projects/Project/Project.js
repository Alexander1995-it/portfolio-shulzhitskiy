import React from 'react';
import style from './Project.module.scss'

const Project = (props) => {
    return (
        <div className={style.ProjectBlock}>
            <div className={style.imagesProjectBlock}>
                <div style={props.images} className={style.imagesProject}>
                    <div className={style.buttonBlock}>
                        <span>View project</span>
                    </div>
                </div>
            </div>
            <div className={style.titleProject}>{props.titleProject}</div>
            <div className={style.aboutProject}>{props.aboutProject}</div>
            <div className={style.stackProject}><span>Stack: </span> {props.stack}</div>
        </div>
    );
};

export default Project;