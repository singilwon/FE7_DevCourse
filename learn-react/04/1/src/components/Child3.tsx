//Child.tsx
export default function Child({ fruits }: { fruits: string[] }) {
  return (
    <>
      <ul>
        <li>{fruits[0]}</li>
        <li>{fruits[1]}</li>
        <li>{fruits[2]}</li>
      </ul>
    </>
  );
}
