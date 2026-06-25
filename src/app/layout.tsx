import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IT Jobs",
  description: "IT Jobs...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
    >
      <body>{children}</body>
    </html>
  );
}
