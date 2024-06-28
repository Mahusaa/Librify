import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Inter } from 'next/font/google';
import Header from "~/components/Header";
import PageWrapper from "~/components/PageWrapper";
import MarginWidthWrapper from "~/components/MarginWidthWrapper";
import HeaderMobile from "~/components/HeaderMobile";
import SideBar from "~/components/sidebar";
export const metadata = {
  title: "Librify",
  description: "This is my app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <div className="flex">
          <SideBar />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </body>

    </html>
  );
}
