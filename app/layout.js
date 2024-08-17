import { Nunito } from "next/font/google";
import { Silkscreen } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "AdditionalRAM",
  description: "AdditionalRAM's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
