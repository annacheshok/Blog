import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='wrapper'>
          <div className='content'>
            <Header />
            <Footer />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
