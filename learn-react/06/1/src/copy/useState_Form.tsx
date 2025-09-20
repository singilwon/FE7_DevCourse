import { useState } from "react";

// useState + Form
// onChange (React) => onInput + onChange(Dom)
export default function App() {
  const [value, setValue] = useState("남자");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      {/* <h1>{text}</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="이메일을 입력해주세요"
      /> */}

      {/* <select onChange={handleChange} value={text}>
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="orange">orange</option>
      </select> */}

      {/* <pre>{value ? "동의함" : "동의하지 않음"}</pre>
      <div>
        <label htmlFor="chk">
          <input type="checkbox" checked={value} onChange={handleChange} />
          이용약관에 동의합니다
        </label>
      </div> */}

      <pre>{value}</pre>
      <div>
        <input
          type="radio"
          name="gender"
          value="남자"
          defaultChecked
          onChange={handleChange}
        />{" "}
        남자
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          value="여자"
          onChange={handleChange}
        />{" "}
        여자
      </div>
    </>
  );
}
