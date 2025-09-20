// 요소를 반복 렌더링 하려면
// 그 요소를 가공해서 가공된 값이 포함된 배열로 만들어주면 되겠구나
// 그리고 그 배열을 표현식으로 출력하면 되겠구나

import UserCard from "../components/userCard";

export default function App() {
  const items = ["Apple", "Banana", "Cherry"];
  const users = [
    {
      id: 1,
      name: "kim",
      age: 30,
    },
    {
      id: 2,
      name: "park",
      age: 20,
    },
    { id: 3, name: "hong", age: 15 },
  ];
  const newItem = [];
  for (let i = 0; i < items.length; i++) {
    newItem.push(<li>items[0]</li>);
  }
  return (
    <>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <ul>{newItem}</ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}/{user.age}
        </li>
      ))}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}
