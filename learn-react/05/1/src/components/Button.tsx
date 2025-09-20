export default function Button({
  handleClick2,
  handleClick,
}: {
  handleClick2: (name: string) => void;
  handleClick: () => void;
}) {
  return (
    <>
      <button onClick={() => handleClick2("kim")}>클릭!!</button>
      <button onClick={handleClick}>클릭!!</button>
    </>
  );
}
