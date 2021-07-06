import React from 'react';

import StoreContext from './helpers/storeContext';
import Dispatcher from './helpers/dispatcher';
import Executor from './helpers/executor';
/**
 * 这里手动引入model
 */
import useAuthModel from '../models/useAuthModel';

const dispatcher = new Dispatcher();
const Exe = Executor;

/**
 * 赋值引入的model，这个地方可以改成自动化的
 */
const models = {
  useAuthModel,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ({children}) => {
  return (
    <StoreContext.Provider value={dispatcher}>
      {
        Object.entries(models).map(pair => {
          return (<Exe key={pair[0]} namespace={pair[0]} hook={pair[1]} onUpdate={(val) => {
            const [ns] = pair;
            dispatcher.data[ns] = val;
            dispatcher.update(ns);
          }} />);
        })
      }
      {children}
    </StoreContext.Provider>
  );
}
