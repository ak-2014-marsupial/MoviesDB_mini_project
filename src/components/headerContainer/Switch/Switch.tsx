import React, {FC, useContext, useEffect, useState} from 'react';

import css from "./Switch.module.css"

type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type Theme = 'dark'|'light'

const Switch: FC = () => {

    const [theme, setTheme] = useState<Theme>('light');

    const handleChange=(e:ChangeEvent)=>setTheme(e.target.checked?'dark':'light');

    useEffect(() => {
        document.body.setAttribute('data-theme',theme);
    }, [theme]);

    return (
        <div className={css.container_switch}>
            <span>Change Theme</span>
            <label className={css.switch}>
                <input  type="checkbox" onChange={handleChange} checked={theme === 'dark'}/>
                <span className={css.slider}></span>
            </label>

        </div>
    );
};

export {Switch};