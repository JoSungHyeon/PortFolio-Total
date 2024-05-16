

export const metadata = {
  title: "PF-React-Next",
  description: "만들어보기",
  keyword: ["만들어보기"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <body>{children}</body>
    </html>
  );
}
