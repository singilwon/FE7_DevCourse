// 이벤트
// import Button from "./components/Button";
export default function App() {
  //이벤트 객체
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    name: string
  ) => {
    console.log(e, name);
  };
  // const handleClick = () => {
  //   alert("click!");
  // };
  // const handleClick2 = (name: string) => {
  //   alert(name);
  // };
  return (
    <>
      <button onClick={(e) => handleClick(e, "kim")}>클릭</button>
      {/* <button onClick={handleClick}>클릭</button>
      <button onClick={() => handleClick2("송주원")}>클릭</button>
      <Button handleClick={handleClick} handleClick2={handleClick2} /> */}
    </>
  );
}
