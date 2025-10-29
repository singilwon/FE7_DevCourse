import Link from "next/link";

async function getRandomNumber() {
  const res = await fetch("http://localhost:4000/random", {
    cache: "no-store",
  });
  const randomNum = await res.json();
  return randomNum;
}

export default async function AboutPage() {
  const randomNum = await getRandomNumber();
  return (
    <>
      <h1>AboutPage: {randomNum}</h1>
      <Link href={"/"}>Home</Link>
    </>
  );
}
