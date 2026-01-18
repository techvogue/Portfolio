import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kumar Gautam — Full Stack Developer",
  description:
    "Full Stack MERN Developer focused on building clean, scalable web systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Add it here specifically to fix the error */}
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="pt-28">{children}</main>
      </body>
    </html>
  );
}