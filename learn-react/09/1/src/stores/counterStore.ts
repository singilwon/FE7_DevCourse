// use***Store

import { create } from "zustand";
import {
  combine,
  createJSONStorage,
  devtools,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementByAmount: (value: number) => void;
};

// immer(콜백함수)
// devtools는 immer를 똑같이 감싸주는 것
export const useCounterStore = create<CounterStore>()(
  subscribeWithSelector(
    devtools(
      persist(
        immer(
          combine({ count: 0 }, (set) => ({
            // immer 써서 불변성 생각 안 하고 한 것
            increment: () =>
              set((state) => {
                state.count += 1;
              }),
            decrement: () =>
              set((state) => {
                state.count -= 1;
              }),
            reset: () => set({ count: 0 }),
            // immer 안 쓰면 원래 이렇게 직접적으로 참조 안 하는 방식으로 해야함
            incrementByAmount: (value) =>
              set((state) => ({ count: state.count + value })),
          }))
        ),
        {
          name: "counter-store",
          storage: createJSONStorage(() => sessionStorage),
        }
      ),
      {
        trace: true,
      }
    )
  )
);
