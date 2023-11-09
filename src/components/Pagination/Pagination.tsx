import React, {FC, useEffect, useState} from 'react';
import { useSearchParams} from "react-router-dom";

import css from "./Pagination.module.css";

interface IProps{
    total_pages:number,
    total_results:number
}

const Pagination:FC<IProps> = ({total_pages,total_results}) => {

    const [query, setQuery] = useSearchParams({page: `1`});
    const currentPage = +query.get('page')  ? +query.get('page') : 1;
    // console.log(currentPage,'   ',total_pages,'   ',total_results ," >>>>",total_results- Math.ceil(total_results/total_pages)*currentPage);
    const [countMovieNext, setCountMovieNext] = useState(0)
    const [countMoviePrev, setCountMoviePrev] = useState(0)
    useEffect(() => {
        const moviesOnPage=Math.ceil(total_results/total_pages);
        setCountMovieNext(total_results- (currentPage+1)*moviesOnPage);
        setCountMoviePrev((currentPage-1)*moviesOnPage)
        console.log(total_results,"  ",currentPage, "  ",total_results);

    }, [currentPage,total_results]);




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
        <div className={css.pagination}>
            <div> {new Intl.NumberFormat().format(countMoviePrev)} ....</div>
            <button disabled={currentPage <= 1} onClick={handlePrev}>Prev</button>
            <button disabled={currentPage >= total_pages} onClick={handleNext}>Next</button>
            <div> ... {new Intl.NumberFormat().format(countMovieNext)} </div>

        </div>
    );
};

export  {Pagination};