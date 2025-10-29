import { revalidatePath, revalidateTag } from "next/cache";
import Link from "next/link";

// 동적으로 페이지를 서버에서 부르도록 하는 것
// export const dynamic = "force-dynamic";
// export const revalidate = 0;

async function getRandomNumber() {
  const res = await fetch("http://localhost:4000/random", {
    // 무슨 일이 생겨도 캐시를 사용하지 않겠다는 뜻
    // cache: "no-store",
    // 무조건 캐시 적용하는 상태
    cache: "force-cache",
    // 10초에 한 번씩은 데이터 갱신 가능하게
    // next: { revalidate: 10 },
    next: {
      tags: ["random", "number", "num"],
    },
  });
  const randomNum = await res.json();
  return randomNum;
}

export async function generateMetadata() {
  const randomNum = await getRandomNumber();
  return {
    title: `${randomNum}`,
  };
}

const handle = async () => {
  "use server";
  //내가 초기화 하고 싶은 경로를 적어주는 것
  // 병행해서 쓸 수 있음 tag랑 path랑
  revalidatePath("/");
  revalidateTag("random", "max");
};

export default async function Page() {
  const randomNum = await getRandomNumber();
  return (
    <>
      <h1>Page : {randomNum}</h1>
      <div style={{ height: "6000px" }}></div>
      <Link href={"/about"} prefetch={true}>
        About
      </Link>
      <form action={handle}>
        <button>초기화</button>
      </form>
    </>
  );
}
