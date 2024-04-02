import { Counter } from './Counter';

import { Partition, Text, Title } from '@/components/Elements';

export default function useState() {
  return (
    <>
      <Title>useState</Title>
      <Text>
        useState で定義した状態を 親 → 子 → 孫 → ひ孫 と受け渡していく Props drilling の例です。
      </Text>

      <Partition />

      <Counter />
    </>
  );
}
