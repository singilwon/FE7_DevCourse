// import First from "./components/First";
// import Second from "./components/Second";

export default function App() {
  return (
    <>
      {/* 인라인 스타일 
          잘 쓰지는 않지만 이메일 폼(본문) 안에서는 사용해야 함*/}
      <h1
        style={{
          color: "red",
          fontSize: "40px",
          textDecoration: "line-through",
        }}
      >
        App Component
      </h1>
      <h2 className="title">External Styles</h2>
      {/* <First />
      <Second /> */}
    </>
  );
}
