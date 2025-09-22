//Child.tsx
export default function Child({
  userObj,
}: {
  userObj: { name: string; age: number };
}) {
  return (
    <>
      <h1>{userObj.name}</h1>
      <h1>{userObj.age}</h1>
    </>
  );
}
