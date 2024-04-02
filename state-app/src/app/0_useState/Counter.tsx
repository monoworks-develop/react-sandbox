'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import { FaMinus, FaPlus } from 'react-icons/fa6';

import { styles } from '../Counter.css';

import { Button, Text } from '@/components/Elements';

// type 定義
type props = { count: number; setCount: Dispatch<SetStateAction<number>> };

// 親コンポーネント
export function Counter() {
  const [count, setCount] = useState(10);
  return (
    <div className={styles.parentContainer}>
      <Text>親コンポーネントのカウント: {count}</Text>
      <Child count={count} setCount={setCount} />
    </div>
  );
}

// 子
function Child({ count, setCount }: props) {
  return <Grandchild count={count} setCount={setCount} />;
}

// 孫
function Grandchild({ count, setCount }: props) {
  return <GreatGrandchild count={count} setCount={setCount} />;
}

// ひ孫
function GreatGrandchild({ count, setCount }: props) {
  return (
    <>
      <Text>ひ孫コンポーネントのカウント: {count}</Text>
      <div className={styles.buttonConrainer}>
        <Button onClick={increment}>
          <FaPlus />
        </Button>
        <Button onClick={decrement}>
          <FaMinus />
        </Button>
      </div>
    </>
  );

  // ボタン押下時の処理関数群
  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }
}
