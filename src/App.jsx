import React, {useMemo, useEffect, useLayoutEffect} from 'react';
import Son from './Son';
import Sibling from './Sibling';

import {useModel} from './useModelPlugin'

import './App.css';
let ids = 0;
function App() {
  ids++;
  console.log('appids:', ids);
  const {
    user,
    signin,
    signout
  } = useModel('useAuthModel') || {};

  useMemo(() => {
    console.log('parentmemo1');
  });

  useEffect(() => {
      console.log('parentEffectcreate1');
      return () => {
          console.log('parentEffectdestore1');
      };
  });


  // useLayoutEffect(() => {
  //   console.log('parentLayoutEffectcreate1');
  //   return () => {
  //       console.log('parentLayoutEffectdestore1');
  //   };
  // }, []);

  useMemo(() => {
      console.log('parnetmemo2');
  });

  useEffect(() => {
      console.log('parentEffectcreate2');
      return () => {
          console.log('parentEffectdestore2');
      };
  });

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={() => {
          user ? signout() : signin('eric')
        }}>
            欢迎{user}来到德莱联盟
        </p>
        <Son />
        <Sibling />
      </header>
    </div>
  );
}

export default App;
