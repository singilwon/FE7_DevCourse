import Image from "next/image";
import Button from "./components/Button";
import { anton, jeju, nanumPenScript } from "./layout";

export default function Page() {
  return (
    <>
      <h1 className={nanumPenScript.className}>Page</h1>
      <h1 className={anton.className}>Anton</h1>
      <h1 className={jeju.className}>홉저옵서예</h1>
      <Button />
      <Image
        src={
          "https://cdn.pixabay.com/photo/2017/08/01/17/27/jellyfish-2566795_1280.jpg"
        }
        alt="start"
        // width={400}
        // height={400}
        fill
      />
    </>
  );
}
