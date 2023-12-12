import React from 'react';
import DisplayCounter from "@/component/DisplayCounter";
import CounterUpdate from "@/component/CounterUpdate";
import NestCounter from "@/component/NestCounter";

function Index() {
  console.log('index render - ', new Date().getTime());

  return (
    <div>
      <h1>
        首页
      </h1>
      <DisplayCounter />
      <CounterUpdate />

      <div>----------------------</div>
      <NestCounter />
    </div>
  )
}

export default Index;
