import "./globals.css";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "./context/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Search Box",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
