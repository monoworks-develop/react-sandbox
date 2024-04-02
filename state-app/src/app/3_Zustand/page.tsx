'use client';

import { RecoilRoot } from 'recoil';

import { Counter } from './Counter';

import { Title, Text, Partition } from '@/components/Elements';

export default function Zustand() {
  return (
    <>
      <Title>Zustand</Title>

      <Text>a</Text>

      <Partition />

      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </>
  );
}
