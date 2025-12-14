import "./globals.css";
import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";

const zenMaru = Zen_Maru_Gothic({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Neon Cat Reverie",
  description: "Loopable 6-second neon swirl with a fluffy cat mesmerized by colors."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={zenMaru.className}>{children}</body>
    </html>
  );
}
