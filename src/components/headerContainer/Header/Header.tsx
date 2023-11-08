import React from 'react';
import { NavLink} from "react-router-dom";

import {UserInfo} from "../../UserInfo";
import {Switch} from "../Switch";
import css from "./Header.module.css"

const Header = () => {
    return (
        <nav className={css.header}>
            <h1>Header</h1>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={"genres"}> Genres</NavLink>
            <h1>Search</h1>
            <Switch/>
            <UserInfo/>
        </nav>
    );
};

export {Header};