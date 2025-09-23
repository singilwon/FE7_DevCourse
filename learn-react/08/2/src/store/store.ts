import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import configureReducer from "./slice/configureSlice";
export const store = configureStore({
  reducer: {
    count: counterReducer, // 여기에 상태관리 영역에 count 이름으로 하나를 꽂았다고 생각
    configure: configureReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
