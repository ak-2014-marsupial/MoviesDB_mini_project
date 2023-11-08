import React, {FC} from 'react';

import css from './GenreBadge.module.css'
import {posterBaseUrl} from "../../constants";
import {IGenre} from "../../interfaces/movieInterface";
import {useNavigate} from "react-router-dom";
interface  IProps{
    poster_path:string
}

const GenreBadge:FC<IGenre> = ({id,name}) => {
    const navigate = useNavigate();

    return (
        <div className={css.genre_badge} onClick={()=>navigate(`/movies/genre/${id}`)}>
            {name}
        </div>

    );
};

export  {GenreBadge};