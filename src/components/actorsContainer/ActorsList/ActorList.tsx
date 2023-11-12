import React, {FC, useEffect, useState} from 'react';
import {IActor} from "../../../interfaces/movieInterface";

import {moviesService} from "../../../services/moviesService";
import {ActorListCard} from "../ActorListCard";
import css from "./ActorsList.module.css";

interface IProps{
    id:number
}
const ActorList:FC<IProps> = ({id}) => {
    const [actors, setActors] = useState<IActor[]>([]);

    useEffect(() => {
        moviesService.getActorsByFilmId(id).then(({data})=> setActors(data.cast));
    }, [id]);

    return (
        <>
            <h2>Actors list:</h2>

            <div className={css.actor_list}>

                {actors.map(actor=><ActorListCard key={actor.id} actor={actor}  />

                )}
            </div>
        </>
    );
};

export  {ActorList};