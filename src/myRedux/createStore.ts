import {
  IAction,
  IListener,
  IStore,
  IReducer,
} from "@/myRedux/types";

export function createStore(reducer: IReducer): IStore {
  let state = reducer();
  let listenerCollection: Map<number, IListener> = new Map();
  let collectionId = 0;

  let isDispatching = false;

  function subscribe(curListener: IListener) {
    let isSubscribed = true;
    collectionId += 1;
    const curId = collectionId;
    listenerCollection.set(curId, curListener);

    return () => {
      if (!isSubscribed) {
        throw new Error(
          'can not unsubscribe listener which does not subscribed'
        );
      }

      if (isDispatching) {
        throw new Error(
          'can not unsubscribed while reducer is executing'
        );
      }

      isSubscribed = false;
      listenerCollection.delete(curId);
    };
  }

  function dispatch(curAction: IAction) {
    if (isDispatching) {
      throw new Error(
        'can not dispatch while reducer is executing'
      );
    }

    try {
      isDispatching = true;

      const preState = state;
      const curState = reducer(preState, curAction);
      state = curState;
    } catch (e) {

    } finally {
      isDispatching = false;
    }

    listenerCollection.forEach((listenerItem, key) => {
      listenerItem();
    });
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}
