import { Metadata } from "next";
import { Nanum_Pen_Script } from "next/font/google";
import { Anton } from "next/font/google";
import localFont from "next/font/local";

export const jeju = localFont({
  src: [
    {
      path: "../assets/fonts/doldam.woff2",
    },
    {
      path: "../assets/fonts/doldam.woff",
    },
  ],
});

export const nanumPenScript = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
});

export const anton = Anton({ weight: "400" });

export const metadata: Metadata = {
  title: {
    template: "%s | Song",
    default: "송코딩 | 누구나 쉽게 못 배우는 코딩 교육",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
