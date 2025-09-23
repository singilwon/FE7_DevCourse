import { createContext } from "react";

type CounterContextType = {
  count: number;
};

export const CounterContext = createContext<CounterContextType | null>(null);

type CounterActionType = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const CounterActionContext = createContext<CounterActionType | null>(
  null
);
