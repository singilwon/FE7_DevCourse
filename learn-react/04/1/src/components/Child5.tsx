//Child.tsx
export default function Child({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <>
      <h1>{isLoggedIn ? "로그인 됨" : "로그인 안됨"}</h1>
    </>
  );
}
