import React from 'react';
import style from './Projects.module.scss'
import Project from "./Project/Project";
import socialNetwork from '../../image/imgProjects/network.webp'
import todoList from '../../image/imgProjects/To_Do_List.webp'
import teamWork from './../../image/imgProjects/teamwork.jpg'
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
                        <Project images={socialNBackground}
                                 aboutProject={'Educational project (Dec  2021 -  Nov 2022). ' +
                                     'Social network app with using class components , routing, ' +
                                     'loading, working with REST api, login/logout flow, ' +
                                     'pagination, form and validation, file uploading.'}
                                 stack={'TypeScript, React, Redux, Redux-Thunk, React-Router-dom, Axios, Formik; Bug fixing, deployin.'}
                                 titleProject={'Social network'}/>
                        <Project images={todoBackground} aboutProject={'Educational project (Jul 2022 - Jan 2023). ' +
                            'Todolist app created with react hooks, routing and ' +
                            'redirects, material UI, REST api request/response flow, ' +
                            'unit-tests and etc.'}
                                 stack={'Stack: TypeScript, React, Redux Toolkit, Redux-thunk, React -router-dom, Axios, Material UI, Formik.'}
                                 titleProject={'Todo list'}/>
                        <Project images={teamWorkBackground}
                                 aboutProject={'Start-up project. Part time (Oct 2022 - preset day). ' +
                                     'Creating learning app in team with using git, work ' +
                                     'with Axios(CRUD).'}
                                 stack={'Stack: React, Redux, TypeScript, Redux-Thunk, React-router-dom, Axios, Formik, Unit Test, Material UI.'}
                                 titleProject={'Team work'}/>
                    </div>
                </Zoom>
            </div>

        </div>
    );
};

export default Projects;