import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Johnny Simoncic — Cinematographer & Video Producer",
  description:
    "Video producer and cinematographer based in Iowa City. Cinematic content for sports, athletics, and brands.",
  openGraph: {
    title: "Johnny Simoncic — Cinematographer & Video Producer",
    description:
      "Video producer and cinematographer based in Iowa City. Cinematic content for sports, athletics, and brands.",
    type: "website",
    url: "https://johnnysimoncic.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johnny Simoncic — Cinematographer & Video Producer",
    description: "Video producer and cinematographer based in Iowa City.",
    creator: "@simoprods",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
