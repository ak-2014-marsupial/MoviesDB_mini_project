import React from 'react';
import {NavLink} from "react-router-dom";

import {UserInfo} from "../../UserInfo";
import {Switch} from "../Switch";
import css from "./Header.module.css"
import {Search} from "../Search";

const Header = () => {


    return (
        <nav className={css.header}>

            <div className={css.col_1}>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={"genres"}> Genres</NavLink>
                <Search/>
            </div>
            <div className={css.col_2}>
                <Switch/>
                <div className={css.avatar}>
                    <UserInfo/>
                </div>
            </div>

        </nav>
    );
};

export {Header};