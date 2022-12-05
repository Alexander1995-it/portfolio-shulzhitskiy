import React from 'react';
import style from './Projects.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import Project from "./Project/Project";
import socialNetwork from '../../image/img-projects/social-network.webp'
import todoList from '../../image/img-projects/todoList.jpg'
import teamWork from './../../image/img-projects/teamwork.jpg'

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
            <div className={styleContainer.container}>
                <div className={style.projectsTitle}>Projects</div>
                <div className={style.wrapperProjects}>
                    <Project images={socialNBackground} aboutProject={'about'} titleProject={'Social network'}/>
                    <Project images={todoBackground} aboutProject={'about'} titleProject={'Todo list'}/>
                    <Project images={teamWorkBackground} aboutProject={'about'} titleProject={'Team work'}/>
                </div>
            </div>

        </div>
    );
};

export default Projects;