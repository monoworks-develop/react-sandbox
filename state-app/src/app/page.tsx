import { Title, Text } from '@/components/Elements';

export default function Home() {
  return (
    <div>
      <Title>Home</Title>
      <Text>
        このアプリは、React で頻発する Props drilling (props のバケツリレー) という問題において、
        <br />
        それを解決するために使用される React の Context API、
        <br />
        およびサードパーティの状態管理ライブラリについて調査・比較を行い、
        <br />
        React における状態管理のベストプラクティスを模索する為のものです。
      </Text>

      <Text>
        <br />
        例として簡単なカウンターコンポーネントを実装しています。
        <br />
        また、Props drilling が発生するように、不要な階層を追加して実装を行っています。
        <br />
        具体的には、親 → 子 → 孫 → ひ孫 の順に props のバケツリレーを行うように実装しています。
      </Text>
    </div>
  );
}
