import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import SearchPage from '../pages/SearchPage/SearchPage';

const Router = () => {
    return (
        <Routes>
            <Route index path='/' element={<MainPage />} />
            <Route path='/search' element={<SearchPage />} />
        </Routes>
    );
};

export default Router;