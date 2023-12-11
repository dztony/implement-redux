
type IAction = {
  type: string;
  payload: Record<any, any>;
};

type IState = Record<any, any>;

type IReducer = (state?: Record<any, any>, action?: IAction) => Record<any, any>;

type IListener = (state: IState) => any;

function createStoreLocalRedux(reducer: IReducer) {
  let state: IState = reducer();
  let listenerList: Array<IListener> = []

  function getState() {
    return state;
  }

  function dispatch(action: IAction) {
    const curState = reducer(state, action);
    state = curState;
    notifyListeners();
  }

  function notifyListeners() {
    for (const listener of listenerList) {
      listener(state);
    }
  }

  function subscribe(listener: IListener) {
    listenerList.push(listener);
  }

  return {
    getState,
    subscribe,
    dispatch,
  };
}

export default createStoreLocalRedux;
