'use client';

import { FaMinus, FaPlus } from 'react-icons/fa6';
import { useRecoilState, useRecoilValue } from 'recoil';

import { styles } from '../Counter.css';

import { countState } from './atom';

import { Button, Text } from '@/components/Elements';

// 親コンポーネント
export function Counter() {
  // atom から値のみを取得
  const count = useRecoilValue(countState);

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
  // atom から値とset関数を取得
  const [count, setCount] = useRecoilState(countState);

  return (
    <>
      <Text>ひ孫コンポーネントのカウント: {count}</Text>
      <div className={styles.buttonConrainer}>
        <Button onClick={() => setCount(count + 1)}>
          <FaPlus />
        </Button>
        <Button onClick={() => setCount(count - 1)}>
          <FaMinus />
        </Button>
      </div>
    </>
  );
}
