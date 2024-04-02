'use client';

import { Counter } from './Counter';
import { ReduxProvider } from './store';

import { Title, Text, Partition } from '@/components/Elements';

export default function Redux() {
  return (
    <>
      <Title>Redux</Title>

      {/* prettier-ignore */}
      <Text>
        Redux はアプリケーション全体の状態を store と呼ばれる場所で一元管理するライブラリです。
        <br />
        React 以外に Vue, Angular などの様々なフレームワークで使用することが出来ます。
        <br />
        <br />
        Context API では共有する Context が増えるごとに Provider のネストが深くなるという問題がありましたが、
        <br />
        Redux では共有する Context を store の 1 つのみにすることで、この問題を解消しています。
        <br/>
        <br />
        ただし、Redux 本体, Redux Toolkit, React-Redux についてそれぞれ理解する必要があるため、
        <br />
        学習コストは高く感じました。
        <br />
        <br />
        以下の 3 ステップで実装が出来ます。
        <br />
        1. reducer (状態の更新用の関数) の定義 
        <br />
        2. store の作成 (1. で作成した reducer を使用して store 内の状態を更新していく)
        <br />
        3. useSelector, useDispatch を使用して store の値を取得、更新
        <br />
        <br />
        詳細な実装方法は <code>src/app/2_Redux/store.ts</code> を参照
        
      </Text>

      <Partition />

      <ReduxProvider>
        <Counter />
      </ReduxProvider>
    </>
  );
}
