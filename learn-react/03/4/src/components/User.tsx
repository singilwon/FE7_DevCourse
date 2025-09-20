export default function User(props: { name: string; age: number }) {
  // {name,age,address} 이런 식으로 매개변수에 구조분해할당으로 받아도 됨
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </>
  );
}
