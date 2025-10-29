"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
// import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  // router.back() - 뒤로 가기
  // router.forward() - 앞으로 가기
  // router.hmrRefresh() - HMD 새로고침
  // router.prefetch() - 상용 모드에서만
  // router.push(url) - 라우트 전환
  // router.refresh - 현재 새로고침
  // router.replace(url) - 라우트 전환(브라우저 히스토리X)

  // useEffect(() => {
  //   router.push("/docs");
  // }, [router]);
  return (
    <>
      <h1>Page</h1>
      <button onClick={() => router.push("/docs")}>docs</button>
      <Button text="로그인" />
    </>
  );
}
