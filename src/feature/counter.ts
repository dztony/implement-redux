

type IState = {
  value: number;
};

type IAction = {
  type: string;
  payload: Record<any, any>;
};

const initialState: IState = {
  value: 0,
};

export function counterReducer(state: Record<any, any> = initialState, action: IAction) {
  try {
    if (action.type === 'counter/increment') {
      const preValue = state.value;
      return {
        ...state,
        value: preValue + action.payload.offset,
      };
    }

    if (action.type === 'counter/decrement') {
      const preValue = state.value;
      return {
        ...state,
        value: preValue - action.payload.offset,
      };
    }
  } catch (e) {
    // console.error(e);
    return state;
  }
}

