/* eslint-disable import/no-anonymous-default-export */
import React, { useMemo, useRef, useEffect } from 'react';

export default (props) => {
  const {
    hook,
    onUpdate,
    namespace
  } = props;

  const updateRef = useRef(onUpdate);
  updateRef.current = onUpdate;
  const initialLoad = useRef(false);
  let data = hook();

  useMemo(() => {
    updateRef.current(data);
  }, []);

  useEffect(() => {
    if (initialLoad.current) {
      updateRef.current(data);
    }
    else {
      initialLoad.current = true;
    }
  });
  return <></>;
}
