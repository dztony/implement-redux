import React, { ReactNode, useMemo } from 'react';
import { IStore } from "@/myRedux";
import ReactReduxContext from "@/myReactRedux/ReactReduxContext";
import Subscription from "@/myReactRedux/Subscription";

function Provider(props: IProps) {
  const { store, children } = props;

  const subscription = new Subscription(store);
  const contextValue = useMemo(() => {
    return {
      store,
      subscription
    };
  }, [store]);


  return (
    <ReactReduxContext.Provider value={contextValue}>
      {children}
    </ReactReduxContext.Provider>
  );
}

type IProps = {
  store: IStore;
  children: ReactNode;
};

export default Provider;
