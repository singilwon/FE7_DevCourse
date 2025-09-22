//Child.tsx
interface ChildProps {
  // style: {fontSize:string; color:string; textDecoration:string}
  // style: { [key: string]: string };
  style: React.CSSProperties;
}
export default function Child(props: ChildProps) {
  return (
    <>
      <h1 style={props.style}>Child Component</h1>
    </>
  );
}
