import React from 'react';
import {Switch} from "../Switch";

import css from "./Header.module.css"

const Header = () => {
    return (
        <div className={css.header}>
            <h1>Header</h1>
            <Switch/>
        </div>
    );
};

export {Header};