import { CountProvider } from './CountContext';
import { Counter } from './Counter';

import { Title, Text, Partition, Link } from '@/components/Elements';

export default function ContextAPI() {
  return (
    <>
      <Title>Context API</Title>

      <Text>
        React に標準で用意されている Context API を使用した例です。
        <br />
        Context API を用いて値を共有するには、値を提供する側と受け取る側でそれぞれ処理が必要です。
        <br />
        <br />
        値を提供する側
        <br />
        1. createContext を用いて Context の作成
        <br />
        2. 1. で作成した Context の Provider を使用し値を提供する。提供する値は value で設定
        <br />
        ※ Provider で状態を提供したい場合は、useReducer と組み合わせて使用することを推奨
        <br />
        参考:
        <Link href='https://react.dev/learn/scaling-up-with-reducer-and-context'>
          Reducer と Context によるスケールアップ
        </Link>
        <br />
        <br />
        値を受け取る側
        <br />
        1. useContext を使用して、対象の Context が提供している値を取得する
        <br />
        <br />
        詳細な実装方法は <code>src/app/1_ContextAPI/CountContext.tsx</code> を参照
      </Text>

      <Partition />

      <CountProvider>
        <Counter />
      </CountProvider>
    </>
  );
}
