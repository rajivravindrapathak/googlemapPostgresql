import React from "react";
import HeaderCom from "../components/Header";
import { Route, Routes } from "react-router-dom";
import MapPage from "../pages/MapPage";

const AllRoutes = () => {

    return ( 
        <>
            <HeaderCom />
            <Routes>
                <Route path="/" element={ <MapPage /> } />
            </Routes>
        </>
    );
}

export default AllRoutes;