import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar/page";
import RegisterModal from "@/components/Modals/RegisterModal";
import ToasterProvider from "@/components/Providers/ToasterProvider";
import LoginModal from "@/components/Modals/LoginModal";
import getCurrentUser from "@/lib/actions/getCurrentUser";
export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  console.log(currentUser);
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser} />

        {children}
      </body>
    </html>
  );
}
