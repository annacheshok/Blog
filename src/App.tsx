import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useAppSelector } from './redux/hook';
import MainPage from './pages/MainPage/MainPage';
import Router from './router/Router';

function App() {
  const theme = useAppSelector(store => store.theme.value);

  return (
    <div className={theme === 'light' ? 'wrapper' : `wrapperDark`}>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
