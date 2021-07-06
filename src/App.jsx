import React from 'react';

import {useModel} from './useModelPlugin'

import './App.css';

function App() {
  const {
    user,
    signin,
    signout
  } = useModel('useAuthModel') || {};

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={() => {
          user ? signout() : signin('eric')
        }}>
            欢迎{user}来到德莱联盟
        </p>
      </header>
    </div>
  );
}

export default App;
