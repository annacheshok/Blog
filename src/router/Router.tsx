import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContentPage from '../pages/ContentPage/ContentPage';
import MainPage from '../pages/MainPage/MainPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import { useAppSelector } from '../redux/hook';

const Router = () => {
    const category = useAppSelector(store => store.posts.category);
    return (
        <Routes>
            <Route path='/'>
                <Route index element={<MainPage />} />
                <Route path={`/${category.toLowerCase()}/:id`} element={<ContentPage />} />
            </Route>
            <Route path='/search' element={<SearchPage />} />
        </Routes>
    );
};

export default Router;