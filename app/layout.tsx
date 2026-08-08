import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "Живой Сбой — первая волна фестиваля «Слои Отзвука»",
    description: "20 оригинальных исполнителей, 5 сцен и одна музыкальная вселенная. Встречайте Нулевую волну.",
    openGraph: {
      title: "ЖИВОЙ СБОЙ · Нулевая волна",
      description: "20 невозможных исполнителей встречаются в одной точке эфира.",
      type: "website",
      locale: "ru_RU",
      images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "Живой Сбой — Нулевая волна" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "ЖИВОЙ СБОЙ · Нулевая волна",
      description: "20 невозможных исполнителей. Одна точка эфира.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
