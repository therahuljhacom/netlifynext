import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Noto_Serif_Display } from "next/font/google";
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--primary-font',
  display: 'swap',
})
const noto_serif_display = Noto_Serif_Display({
  subsets: ['latin'],
  variable: '--secondary-font'
})
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import Modal from "@/components/common/Modal/Modal";

export const metadata: Metadata = {
  title: "ThinkChat",
  description: "Automate Interactions, Personalize Transactions and Customer Services with Conversational AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${noto_serif_display.variable}`}>
        <Header />
        {children}
        <Modal />
        <Footer />
      </body>
    </html>
  );
}
