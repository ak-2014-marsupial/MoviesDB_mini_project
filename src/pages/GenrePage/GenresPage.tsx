import React, {useEffect, useState} from 'react';

import {moviesService} from "../../services/moviesService";
import {IGenre} from "../../interfaces/movieInterface";
import {GenreBadge} from "../../components/GenreBadge";
import css from "./GenrePage.module.css"

const GenresPage = () => {
    const [genres, setGenres] = useState<IGenre[]>([])
    useEffect(() => {
        moviesService.getGenres().then(({data: {genres}}) => setGenres(genres))
    }, []);


    return (
        <div className={css.genre_page}>
            { genres.map(genre=><GenreBadge key={genre.id} id={genre.id} name={genre.name}/>)}
        </div>
    );
};

export {GenresPage};