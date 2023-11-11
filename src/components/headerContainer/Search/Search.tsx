import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import css from "./Search.module.css";
import icon from "../../../Assets/images/search_find.png"

const Search = () => {
    const navigate = useNavigate();
    const {register, handleSubmit,reset} = useForm();


    const handleSearch=(txt:{search:string})=>{
        if(txt.search.trim().length>0){
            navigate(`/movies/search?search=${txt.search}`)
            reset()
        } else {
            navigate(`/movies`);
            reset();
        }

    }

    return (
        <form className={css.search} onSubmit={handleSubmit(handleSearch)}>
            <div> <input type="text" name={"search"} placeholder={"search"} {...register('search')}/></div>
            <button><div className={css.wrap_img}><img src={icon} alt="Search"/></div></button>
        </form>
    );
};

export  {Search};

