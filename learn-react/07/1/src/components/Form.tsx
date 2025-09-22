import { useReducer } from "react";

type FormState = {
  email: string;
  pw: string;
};

type FormAction = {
  type: "setEmail" | "setPw";
  payload: string; // payload 라는 임시 변수도 관례
};

export default function Form() {
  function formReducer(state: FormState, action: FormAction) {
    switch (action.type) {
      case "setEmail":
        return { ...state, email: action.payload };
      case "setPw":
        return { ...state, pw: action.payload };
      default:
        return state;
    }
  }
  const [formState, formDispatch] = useReducer(formReducer, {
    email: "",
    pw: "",
  });
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="이메일"
          value={formState.email}
          onChange={(e) =>
            formDispatch({ type: "setEmail", payload: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="비밀번호"
          value={formState.pw}
          onChange={(e) =>
            formDispatch({ type: "setPw", payload: e.target.value })
          }
        />
        <button>로그인</button>
      </form>
    </>
  );
}
