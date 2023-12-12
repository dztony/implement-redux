import React, { useEffect, useReducer, useRef } from 'react';
import { IState } from "@/myRedux";
import ReactReduxContext from "@/myReactRedux/ReactReduxContext";

type ISelector = (state: IState) => any;

function useSelector(selector: ISelector): any {
  const { store, subscription } = React.useContext(ReactReduxContext);
  const curStateValue = selector(store.getState());

  const preStateValue = useRef<any>(null);
  const [_, forceUpdate] = useReducer(x => x +1, 0);

  useEffect(() => {
    const unsubscribe = subscription.subscribe(() => {
      if (isEqual(curStateValue, preStateValue.current)) {
        return;
      }

      preStateValue.current = curStateValue;
      forceUpdate();
    });

    return unsubscribe;
  }, [store, subscription, curStateValue]);

  return curStateValue;
}

function isEqual<T>(a: T, b: T) {
  return a === b;
}

export default useSelector;
