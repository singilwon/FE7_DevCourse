import { formDate } from "../../_helper/utils";
export default async function CommentDetailPage({
  params,
}: {
  params: Promise<{ id: string; commentId: string }>;
}) {
  const { id, commentId } = await params;
  const date = new Date();
  return (
    <>
      <h1>
        {id} / {commentId}
      </h1>
      <h1>{formDate(date)}</h1>
    </>
  );
}
