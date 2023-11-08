import React, {FC, useContext, useEffect, useState} from 'react';
import { IMovieEntries} from "../../../interfaces/movieInterface";

import css from './MoviesList.module.css';
import {moviesService} from "../../../services/moviesService";
import {useSearchParams} from "react-router-dom";
import {MoviesListCard} from "../MoviesListCard";


const MoviesList: FC = () => {
    const [data, setData] = useState<IMovieEntries>({} as IMovieEntries);
    const {page, total_pages, total_results, results} = data;

    const [query, setQuery] = useSearchParams({page: `${page}`});
    const currentPage = +query.get('page') ? +query.get('page') : 1;

    useEffect(() => {
        moviesService.getAll(currentPage).then(({data}) => setData(data))
    }, [currentPage]);


    const handlePrev = () => {
        if (currentPage <= 1) {
            return
        } else {
            setQuery(prev => {
                prev.set('page', `${currentPage - 1}`);
                return prev
            })
        }
    }

    const handleNext = () => {
        if (currentPage >= total_pages) {
            return
        } else {
            setQuery(prev => {
                prev.set('page', `${currentPage + 1}`);
                return prev
            })
        }


    }

    return (
        <>
            <div className={css.movies_list}>
                {results && results.map(i => <MoviesListCard key={i.id} movie={i}/>)}

            </div>
            <div>
                <button disabled={currentPage <= 1} onClick={handlePrev}>Prev</button>
                <button disabled={currentPage >= total_pages} onClick={handleNext}>Next</button>
            </div>
        </>

    );
};

export {MoviesList};