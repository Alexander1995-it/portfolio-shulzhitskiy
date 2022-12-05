import React from 'react';
import style from './Header.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import {Link, NavLink} from "react-router-dom";


const Header = () => {
    let activeStyle = {
        color: "red",
    };
    return (
        <div className={style.headerBlock}>
            <div className={styleContainer.container}>
               <div className={style.linksRow}>
                      <NavLink className={({isActive}) => `${isActive ? style.active : style.noActive}`}  to='/aboutMe'>About me</NavLink>
                      <NavLink className={(navData) => `${navData.isActive ? style.active : style.noActive}`}  to='/projects'>Projects</NavLink>
                  </div>
            </div>
        </div>
    );
};

export default Header;