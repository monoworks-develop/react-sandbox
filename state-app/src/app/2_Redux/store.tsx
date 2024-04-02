import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// slice の作成
const countSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state: number) => state + 1,
    decrement: (state: number) => state - 1,
  },
});

// action のエクスポート
export const { increment, decrement } = countSlice.actions;

// storeの作成
export const store = configureStore({
  reducer: countSlice.reducer,
});

// Provider の定義
export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
