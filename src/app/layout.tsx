import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Sidebar } from "~/components/sidebar";

export const metadata = {
  title: "Librify",
  description: "This is my app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Sidebar />
        <main className="bg-zinc-50 lg:ml-60">
          {children}
        </main>
      </body>

    </html>
  );
}
