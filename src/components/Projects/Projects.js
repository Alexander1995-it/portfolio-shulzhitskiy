import React from 'react';
import style from './Projects.module.scss'
import Project from "./Project/Project";
import socialNetwork from '../../image/imgProjects/sn.webp'
import todoList from '../../image/imgProjects/To_Do_List.webp'
import teamWork from './../../image/imgProjects/social-network.webp'
import Zoom from 'react-reveal/Zoom';

const Projects = () => {

    const socialNBackground = {
        backgroundImage: `url(${socialNetwork})`
    }
    const todoBackground = {
        backgroundImage: `url(${todoList})`
    }
    const teamWorkBackground = {
        backgroundImage: `url(${teamWork})`
    }

    return (
        <div id='projects' className={style.projectsBlock}>
            <div className={style.container}>
                <Zoom>
                    <div className={style.projectsTitle}>Projects</div>
                    <div className={style.wrapperProjects}>
                        <Project images={socialNBackground} aboutProject={'about'} titleProject={'Social network'}/>
                        <Project images={todoBackground} aboutProject={'about'} titleProject={'Todo list'}/>
                        <Project images={teamWorkBackground} aboutProject={'about'} titleProject={'Team work'}/>
                    </div>
                </Zoom>
            </div>

        </div>
    );
};

export default Projects;