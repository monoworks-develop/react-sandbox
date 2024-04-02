'use client';

import { FaMinus, FaPlus } from 'react-icons/fa6';

import { styles } from '../Counter.css';

import { useStore } from './store';

import { Button, Text } from '@/components/Elements';

// 親コンポーネント
export function Counter() {
  const count = useStore((state) => state.count);

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
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

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
}
