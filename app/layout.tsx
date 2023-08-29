import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const font = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitness App",
  description: "Achieve your goal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className + " h-[90vh]"}>
        {children}
        
      </body>
      <Footer/>
    </html>
  );
}
