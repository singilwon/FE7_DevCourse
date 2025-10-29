import { notFound } from "next/navigation";

export default async function TranslateDetail({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang === "fr") notFound();
  return (
    <>
      <h1>TranslateDetail : {lang}</h1>
    </>
  );
}
