//Child.tsx
export default function Child({
  Header,
  Content,
  Footer,
}: {
  Header: React.ReactNode;
  Content: React.ReactNode;
  Footer: React.ReactNode;
}) {
  return (
    <>
      {Header}
      {Content}
      {Footer}
    </>
  );
}
