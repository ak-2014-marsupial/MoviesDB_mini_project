import React, {FC, useEffect, useState} from 'react';
import {IMovieEntries} from "../../../interfaces/movieInterface";

import css from './MoviesList.module.css';
import {useParams, useSearchParams} from "react-router-dom";
import {MoviesListCard} from "../MoviesListCard";
import {IRes} from "../../../types/IResType";
import {Pagination} from "../../Pagination";

interface IProps {
    dataSource: (page: number, id?: string) => IRes<IMovieEntries>,
}

const MoviesList: FC<IProps> = ({dataSource}) => {
    const [data, setData] = useState<IMovieEntries>({} as IMovieEntries);
    const {page, total_pages,total_results, results} = data;
    const [query] = useSearchParams({page: `${page}`});
    const currentPage = +query.get('page') ? +query.get('page') : 1;

    const {id} = useParams();
    useEffect(() => {
        dataSource(currentPage, id).then(({data}) => setData(data));
        // moviesService.getAll(currentPage).then(({data}) => setData(data))
    }, [currentPage]);


    return (
        <>
            <div className={css.movies_list}>
                {results && results.map(i => <MoviesListCard key={i.id} movie={i}/>)}
            </div>

            {total_pages&& <Pagination total_pages={total_pages} total_results={total_results}/>}
        </>

    );
};

export {MoviesList};