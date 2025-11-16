// import { injectStore } from '@/api/axiosInstance';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // 여기에 slice 리듀서들을 추가
  },
  devTools: import.meta.env.DEV,
});

// injectStore(store);
