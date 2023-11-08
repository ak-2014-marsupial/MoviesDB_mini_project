import React, {FC, useEffect, useState} from 'react';

import {IMovieInfo} from "../../../interfaces/movieInterface";
import {moviesService} from "../../../services/moviesService";
import StarRatings from "react-star-ratings";

import css from "./MovieInfo.module.css";
import "../../../constants/var.css";
import {PosterPreview} from "../../PosterPreview";
import {GenreBadge} from "../../GenreBadge";

interface IProps {
    movieId: string;
}

const MovieInfo: FC<IProps> = ({movieId}) => {
    const [movie, setMovie] = useState<IMovieInfo>(null);
    useEffect(() => {
        moviesService.getById(+movieId).then(({data}) => setMovie(data))
    }, []);
    if (!movie) return;
    const {id, poster_path, title, release_date,vote_average, genres, runtime, overview, vote_count} = movie;
    console.log(movie);
    return (
        <div className={css.movie_info}>
            <div className={css.wrap_image}>
                <PosterPreview poster_path={poster_path} title={title}/>

            </div>

            <div className={css.title}>{title}</div>
            <div className={css.content}>{overview}</div>
            <StarRatings starRatedColor='var(--star-primary)'
                         starEmptyColor='var(--star-secondary'
                         numberOfStars={10}
                         starDimension={'25px'}
                         starSpacing={'1px'}
                         rating={vote_average}
            />
            <div className={css.genre_container}>
                {genres.map(genre => <GenreBadge key={genre.id} id={genre.id} name={genre.name}/>)}
            </div>
            <div className={css.content}>Duration {runtime} min</div>
            <div className={css.content}>Release date  {release_date} </div>


        </div>
    );
};

export {MovieInfo};