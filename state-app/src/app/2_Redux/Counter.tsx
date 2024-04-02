'use client';

import { FaMinus, FaPlus } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';

import { styles } from '../Counter.css';

import { decrement, increment, store } from './store';

import { Button, Text } from '@/components/Elements';

// 親コンポーネント
export function Counter() {
  const count = store.getState();

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
  const count = store.getState();

  return (
    <>
      <Text>ひ孫コンポーネントのカウント: {count}</Text>
      <div className={styles.buttonConrainer}>
        <Button onClick={() => store.dispatch(increment())}>
          <FaPlus />
        </Button>
        <Button onClick={() => store.dispatch(decrement())}>
          <FaMinus />
        </Button>
      </div>
    </>
  );
}
