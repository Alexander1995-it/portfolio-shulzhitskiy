import React from 'react';
import style from './Main.module.css'
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import {Route, Routes} from "react-router-dom";

const Main = () => {
    return (
        <div className={style.mainContainer}>
              <Routes>
                  <Route path={'/aboutMe'} element={ <AboutMe/>}/>
                  <Route path={'/projects'} element={ <Projects/>}/>
              </Routes>
        </div>
    );
};

export default Main;