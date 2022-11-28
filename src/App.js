import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Feed } from './features/feed/Feed';
import { SubredditsContainer } from './features/subreddits/SubredditsContainer';

function App() {
  return (
    <div className="App">
      <Feed />
      <SubredditsContainer />
    </div>
  );
}

export default App;
