'use client';

import { createContext, useContext, useReducer } from 'react';

// Contextの作成
export const CountContext = createContext(10);
export const CountDispatchContext = createContext(({}: { type: string }) => {});

// Provoderの定義
export type CountProviderProps = {
  children: React.ReactNode;
};
export function CountProvider({ children }: CountProviderProps) {
  // useReducerを使用してstateを定義
  const [count, dispatch] = useReducer(reducer, 0);

  // 作成したContextのProviderでchildrenをラップする
  return (
    <CountContext.Provider value={count}>
      <CountDispatchContext.Provider value={dispatch}>{children}</CountDispatchContext.Provider>
    </CountContext.Provider>
  );
}

// contextの値を取得するためのカスタムフック
export function useCount() {
  return useContext(CountContext);
}
export function useCountDispatch() {
  return useContext(CountDispatchContext);
}

// reducerによるstateの更新関数
const reducer = (count: number, action: { type: string }) => {
  switch (action.type) {
    case 'increment':
      return count + 1;
    case 'decrement':
      return count - 1;
    default:
      return count;
  }
};
