/* eslint-disable no-unused-expressions */
import React, { useRef, useContext, useState, useEffect } from 'react';
import isEqual from 'lodash/isEqual';
import storeContext from './helpers/storeContext';

export function useModel(namespace, updater) {

  const dispatcher = useContext(storeContext);
  const updaterRef = useRef(updater);
  updaterRef.current = updater;
  const [state, setState] = useState(() =>{
    updaterRef?.current ? updaterRef.current(dispatcher.data[namespace]) : dispatcher.data[namespace];
  });

  const stateRef = useRef(state);
  stateRef.current = state;

  const isMount = useRef(false);
  useEffect(() => {
    isMount.current = true;
    return () => {
      isMount.current = false;
    }
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if(!isMount.current) {
        // 如果 handler 执行过程中，组件被卸载了，则强制更新全局 data
        setTimeout(() => {
          dispatcher.data[namespace] = e;
          dispatcher.update(namespace);
        });
      } else {
        if(updater && updaterRef?.current){
          const currentState = updaterRef?.current(e);
          const previousState = stateRef.current
          if(!isEqual(currentState, previousState)){
            setState(currentState);
          }
        } else {
          setState(e);
        }
      }
    }
    try {
      dispatcher.callbacks[namespace].add(handler);
      dispatcher.update(namespace);
    } catch (e) {
      dispatcher.callbacks[namespace] = new Set();
      dispatcher.callbacks[namespace].add(handler);
      dispatcher.update(namespace);
    }
    return () => {
      dispatcher.callbacks[namespace].delete(handler);
    }
  }, [namespace]);

  return state;
}
