import React from 'react';
import { Header, Reviews, Features } from './containers';
import { Navbar } from './components';
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <div className='cloud__main-body'>
        <Reviews />
        <Features />
      </div>
    </div>
  );
};

export default App;