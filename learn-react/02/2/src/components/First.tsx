import first from "./First.module.css";
import FirstChild from "./FirstChild";

export default function First() {
  return (
    <>
      <h1 className={first.title}>First Component</h1>
      <FirstChild />
    </>
  );
}
