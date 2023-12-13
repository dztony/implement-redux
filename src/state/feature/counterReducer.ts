import { IAction, IState } from "@/myRedux";

const initState = {
  value: 0,
  test: '测试数据 - 不会变更',
};

function counterReducer(state: IState = initState, action: IAction) {
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

  return state;
}

export default counterReducer;
