import React, {FC, useEffect, useState} from 'react';
import {IMovieEntries} from "../../../interfaces/movieInterface";

import css from './MoviesList.module.css';
import {useParams, useSearchParams} from "react-router-dom";
import {MoviesListCard} from "../MoviesListCard";
import {IRes} from "../../../types/IResType";
import {Pagination} from "../../Pagination";

interface IProps {
    dataSource: (param1: number, param2: string) => IRes<IMovieEntries>,
}

const MoviesList: FC<IProps> = ({dataSource}) => {
    const [data, setData] = useState<IMovieEntries>({} as IMovieEntries);
    const {page, total_pages,total_results, results} = data;
    const [query] = useSearchParams({page: `${page}`});

    const currentPage = +query.get('page') ? +query.get('page') : 1;
    const searchValue:string=query.get("search");
    const {id} = useParams();
    const param2=id?id:searchValue;


    useEffect(() => {
        dataSource(currentPage, param2).then(({data}) => setData(data));
    }, [currentPage,param2,dataSource]);


    return (
        <>
            <div className={css.movies_list}>
                {results && results.map(i => <MoviesListCard key={i.id} movie={i}/>)}
            </div>
            {total_pages&& <Pagination total_pages={total_pages} total_results={total_results} moviesPerPage={+results.length}/>}
        </>
    );
};

export {MoviesList};