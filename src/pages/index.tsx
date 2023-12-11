import React, { useEffect } from 'react';
import Link from "next/link";
import store from "@/state/store";
import { localStore } from "@/localRedux/localStore";



function Index() {
  useEffect(() => {
    console.log('redux 监听 v1 v2');
    store.subscribe(getStateFromStoreV1);
    store.subscribe(getStateFromStoreV2);
  }, []);

  useEffect(() => {
    console.log('localredux 监听 v3 v4');
    localStore.subscribe(getStateFromStoreV3);
    localStore.subscribe(getStateFromStoreV4);
  }, []);

  const handleOnClick = () => {
    const action = {
      type: 'counter/increment',
      payload: {
        offset: 3,
      },
    };
    store.dispatch(action);
  }

  const handleOnClickV2 = () => {
    const action = {
      type: 'counter/increment',
      payload: {
        offset: 3,
      },
    };
    localStore.dispatch(action);
  }

  return (
    <div>
      <h1>
        首页
      </h1>
      <Link href={'/blog'}>Blog 页面</Link>

      <div>
        <button onClick={handleOnClick}>
          redux - 触发更新 store
        </button>
      </div>

      <br />
      <div>
        <button onClick={handleOnClickV2}>
          local redux - 触发更新 store
        </button>
      </div>
    </div>
  )
}

function getStateFromStoreV1() {
  const curState = store.getState();
  console.log('v1 - ', curState);
}

function getStateFromStoreV2() {
  const curState = store.getState();
  console.log('v2 - ', curState);
}

function getStateFromStoreV3() {
  const curState = localStore.getState();
  console.log('v1 - ', curState);
}

function getStateFromStoreV4() {
  const curState = localStore.getState();
  console.log('v2 - ', curState);
}


export default Index;
