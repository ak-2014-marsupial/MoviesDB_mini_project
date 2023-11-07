import React, {FC, PropsWithChildren} from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/headerContainer";

interface IProps extends  PropsWithChildren{}
const MainLayout:FC<IProps> = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export  {MainLayout};