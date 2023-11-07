import React, {FC} from 'react';

import {IMovie} from "../../interfaces/movieInterface";
import css from "./MoviesListCard.module.css"
import {posterBaseUrl} from "../../constants/urls";
import {useNavigate} from "react-router-dom";
import StarRatings from "react-star-ratings";

interface IProps{
    movie:IMovie
}
const MoviesListCard:FC<IProps> = ({movie}) => {
    const { backdrop_path, id, title, release_date, vote_average} = movie;
    const navigate =useNavigate();
    const imgPath = backdrop_path ? `${posterBaseUrl}${backdrop_path}` : '';

    const getInfo=()=> {
        navigate(`${id}`)
    }

    return (
        <div className={css.movie_list_card} onClick={getInfo}>
            <div style={{height:"70%"}}>
                <img src={imgPath} alt={`img ${id}`}/>
            </div>
            <div className={css.content}>
                <div className={css.title}> {title}</div>
                <StarRatings starRatedColor="red"
                             numberOfStars={10}
                             starDimension={'18px'}
                             starSpacing={'1px'}
                             rating={vote_average}
                />
                <div className={css.date}>{release_date}</div>
            </div>


        </div>
    );
};

export {MoviesListCard};