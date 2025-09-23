import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import {
  decrement,
  incrementByAmount,
  reset,
} from "../store/slice/counterSlice";
import { setIsDark, setIsLight } from "../store/slice/configureSlice";

export default function CountButtons() {
  const dispatch = useDispatch<AppDispatch>();
  // 이건 액션발생 함수
  return (
    <>
      <button onClick={() => dispatch({ type: "counterSlice/increment" })}>
        {/* 여기서 "counterSlice/ increment" 의 counterSlice는 name을 지어줬던 그거임 */}
        증가
      </button>
      <button onClick={() => dispatch(decrement())}>감소</button>
      {/* 이런 식으로 불러올 수도 있음, 아까 export를 했기 때문에 */}
      <button onClick={() => dispatch(reset())}>초기화</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>(+10)증가</button>
      <br />
      <br />
      <button onClick={() => dispatch(setIsLight())}>라이트모드</button>
      <button onClick={() => dispatch(setIsDark())}>다크모드</button>
    </>
  );
}
