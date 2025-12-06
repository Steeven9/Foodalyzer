import { AuthSessionProvider } from "@/components/AuthSessionProvider";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodalyzer",
  description: "Track your meals and count your calories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased bg-linear-to-br from-slate-900 to-slate-800`}
      >
        <AuthSessionProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthSessionProvider>
      </body>
    </html>
  );
}
