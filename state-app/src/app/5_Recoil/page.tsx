'use client';

import { RecoilRoot } from 'recoil';

import { Counter } from './Counter';

import { Title, Text, Partition } from '@/components/Elements';

export default function Recoil() {
  return (
    <>
      <Title>Recoil</Title>

      <Text>
        Recoil は atom と呼ばれる単位で状態を管理するライブラリです。
        <br />
        今回、紹介する 7 種類のライブラリ中で最もシンプルかつ学習コストが低いライブラリです。
        <br />
        provider の定義や reducer の作成が不要であり、唯一作成が必要なのはユニークなキーを持った
        atom のみです。
        <br />
        値を受け取る側は Recoil が提供する useState に似た Hooks を用いて値を取得、更新を行います。
        <br />
        React と開発元が同じであるため、React との親和性が高いのも特徴です。
        <br />
        <br />
        以下の 2 ステップで実装が出来ます。
        <br />
        1. atom の定義
        <br />
        2. useRecoilState を使用して atom の値を取得、更新
        <br />
        <br />
        ※詳細な実装方法は <code>src/app/5_Recoil/atom.ts</code> を参照
      </Text>

      <Partition />

      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </>
  );
}
