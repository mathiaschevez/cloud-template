import React from 'react';
import { Header, Reviews, Features, Dashboard } from './containers';
import { Navbar } from './components';
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Reviews />
      <Features />
      <Dashboard />
    </div>
  );
};

export default App;