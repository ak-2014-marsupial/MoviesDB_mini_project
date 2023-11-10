import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import css from "./Search.module.css";
import icon from "../../Assets/images/search_find.png"

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();
    const submit = () => {

        navigate("/search")
    }

    // const handleSearch = (txt: { search: string }) => {
    //     // navigate(`/movies/search?search=${txt.search}&filter=Movie search results by name ${txt.search}`)
    //     navigate(`/movies/search?search=${txt.search})
    // };

    const handleSearch=(txt:{search:string})=>{
        navigate(`/movies/search?search=${txt.search}`)
    }

    return (
        <form className={css.search} onSubmit={handleSubmit(handleSearch)}>
            <div> <input type="text" name={"search"} placeholder={"search"} {...register('search')}/></div>
            <button><div className={css.wrap_img}><img src={icon} alt="Search"/></div></button>
        </form>
    );
};

export  {Search};

