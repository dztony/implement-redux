export type IState = Record<any, any>;
export type IAction = {
  type: string;
  payload: Record<any, any>;
};
export type IListener = () => void;

export type IReducer = (initState: IState, action: IAction) => IState;

export type IStore = {
  dispatch: (action: IAction) => void;
  getState: () => IState;
  subscribe: (listener: IListener) => any;
};
