//Child.tsx
export default function Child({ name = "홍길동" }: { name?: string }) {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}
