import React, {FC} from 'react';

import css from "./PosterPreview.module.css";
import {posterBaseUrl} from "../../constants";

interface  IProps{
    poster_path:string
    title:string
}

const PosterPreview:FC<IProps>= ({poster_path,title}) => {
    return (
            <div className={css.poster_preview} >
                <img src={`${posterBaseUrl}${poster_path}`} alt={title}/>
            </div>
    );
};

export  {PosterPreview};