import { useState } from "react";
import Input from "./components/input";
export default function App() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const [pw, setPw] = useState("");
  const pwRef = useRef<HTMLInputElement>(null);
  const handlePwUpdate = (value: string) => {
    setPw(value);
  };
  const handleEmailUpdate = (value: string) => {
    setEmail(value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("이메일 입력");
      if (emailRef.current) emailRef.current.focus();
      return;
    }
    if (pw.trim() === "") {
      alert("비번 입력");
      if (emailRef.current) pwRef.current.focus();
      return;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          ref={emailRef}
          placeholder="이메일 입력"
          value={email}
          setValue={handleEmailUpdate}
        />
        <Input
          type="password"
          ref={pwRef}
          placeholder="비밀번호 입력"
          value={pw}
          setValue={handlePwUpdate}
        />
        <button>로그인</button>
      </form>
    </>
  );
}
