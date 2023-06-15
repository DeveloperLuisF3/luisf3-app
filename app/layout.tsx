import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LuisF3 App",
  description: "Developer LuisF3 App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
