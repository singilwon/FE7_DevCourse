import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice", //name 이름은 중복되면 안됨
  initialState: {
    // 초기상태
    value: 0,
  },
  reducers: {
    // 초기상태를 변경하는 것을 적어주는 메서드라고 생각
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    // 전달하고 싶은 매개변수가 있으면 state 다음에 action으로 받을 수 있음
    // PayloadAction<number> 이 타입 앞은 항상 정해져 있고, 제네릭 내부는 들어오는 매개변수 타입
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, reset,incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
