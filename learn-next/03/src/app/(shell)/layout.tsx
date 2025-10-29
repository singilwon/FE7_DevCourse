export default function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <header>
        <h1>Header</h1>
      </header>
      <body>{children}</body>
      <footer>
        <h1>Footer</h1>
      </footer>
    </html>
  );
}
