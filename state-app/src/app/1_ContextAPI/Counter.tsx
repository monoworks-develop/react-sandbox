'use client';

import { FaMinus, FaPlus } from 'react-icons/fa6';

import { styles } from '../Counter.css';

import { useCount, useCountDispatch } from './CountContext';

import { Button, Text } from '@/components/Elements';

// 親コンポーネント
export function Counter() {
  // context から値を取得
  const count = useCount();

  return (
    <div className={styles.parentContainer}>
      <Text>親コンポーネントのカウント: {count}</Text>
      <Child />
    </div>
  );
}

// 子
function Child() {
  return <Grandchild />;
}

// 孫
function Grandchild() {
  return <GreatGrandchild />;
}

// ひ孫
function GreatGrandchild() {
  // context から値を取得
  const count = useCount();
  const dispatch = useCountDispatch();

  return (
    <>
      <Text>ひ孫コンポーネントのカウント: {count}</Text>
      <div className={styles.buttonConrainer}>
        <Button onClick={() => dispatch({ type: 'increment' })}>
          <FaPlus />
        </Button>
        <Button onClick={() => dispatch({ type: 'decrement' })}>
          <FaMinus />
        </Button>
      </div>
    </>
  );
}
