import { Inter, Momo_Trust_Display } from "next/font/google";
import "./globals.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const momoTrust = Momo_Trust_Display({
  subsets: ["latin"],
  variable: "--font-momo",
  weight: "400",
});

export const metadata = {
  title: "Nadine — Product Designer & UI Engineer",
  description:
    "Portfolio of Nadine Hocking, Product Designer and UI Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${momoTrust.variable}`}>
      <body className="theme">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}