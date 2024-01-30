import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "adlonymous' Blog",
  description: "An adlonymous project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-zinc-800 bg-zinc-300">
        <Navbar />
        <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
