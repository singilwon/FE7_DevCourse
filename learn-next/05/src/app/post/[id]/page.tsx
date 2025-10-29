// 동적세그먼트 - 게시글 (제목)
// 1 - 게시글
// 2 - 게시글

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `${id}- 게시글`,
  };
}

export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <h1>PostDetail - {id}</h1>
    </>
  );
}
