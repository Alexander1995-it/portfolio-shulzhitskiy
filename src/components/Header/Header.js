import React from 'react';
import style from './Header.module.scss'
import {NavLink} from "react-router-dom";


const Header = () => {
    let activeStyle = {
        textDecoration: "yellow",
    };
    return (
        <div className={style.headerBlock}>
            <div className={style.container}>
                <div className={style.linksRow}>
                    <NavLink className={data => data.isActive ? style.active : style.link}
                             to='/aboutMe'>About me</NavLink>
                    <NavLink className={data => data.isActive ? style.active : style.link}
                             to='/projects'>Projects</NavLink>
                    <NavLink className={data => data.isActive ? style.active : style.link}
                             to='/skills'>Skills</NavLink>
                    <NavLink className={data => data.isActive ? style.active : style.link}
                             to='/contact'>Contact</NavLink>

                    {/*<NavLink className={({isActive}) => `${isActive ? style.active : style.noActive}`}  to='/aboutMe2'>About me2</NavLink>*/}
                    {/*<NavLink className={(navData) => `${navData.isActive ? style.active : style.noActive}`}  to='/projects'>Projects</NavLink>*/}
                </div>
            </div>
        </div>
    );
};

export default Header;