import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Feed } from './features/feed/Feed';

function App() {
  return (
    <div className="App">
      <Feed />
    </div>
  );
}

export default App;
