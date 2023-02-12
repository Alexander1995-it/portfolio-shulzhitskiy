import React from 'react';
import style from './Main.module.css'
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import {Route, Routes, Navigate} from "react-router-dom";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

const Main = () => {
    return (
        <div className={style.mainContainer}>
              <Routes>
                  <Route path={'/'} element={ <Navigate to='/aboutMe'/>}/>
                  <Route path={'/aboutMe'} element={ <AboutMe/>}/>
                  <Route path={'/projects'} element={ <Projects/>}/>
                  <Route path={'/skills'} element={ <Skills/>}/>
                  <Route path={'/contact'} element={ <Contact/>}/>
              </Routes>
        </div>
    );
};

export default Main;