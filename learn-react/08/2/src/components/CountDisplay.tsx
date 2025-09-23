import type { RootState } from "../store/store";
import { useSelector } from "react-redux";

export default function CountDisplay() {
  const count = useSelector((state: RootState) => state.count.value);
  const theme = useSelector((state: RootState) => state.configure.theme);
  // useSelector로 꽂혀있는 것 중에서 하나를 골라오는 것
  // 콜백함수로 표현
  // state는 store파일에서 제공하는 상태파일이 제공되는 것
  // state.count의 count는 우리가 store에서 이름 지어진 것
  // 그의 value 값은 counterSlice의 value값에 접근하는 것
  // 만약 거기서 value라고 이름 안 지었으면 그 이름에 맞춰서 불러야됨
  return (
    <>
      <h1>Count : {count}</h1>
      <h1>Theme : {theme}</h1>
    </>
  );
}
