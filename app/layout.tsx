import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar/page";
import RegisterModal from "@/components/Modals/RegisterModal";
import ToasterProvider from "@/components/Providers/ToasterProvider";
import LoginModal from "@/components/Modals/LoginModal";
import getCurrentUser from "@/lib/actions/getCurrentUser";
import SearchModal from "@/components/Modals/SearchModal";
import ToastContainerBar from "@/components/ToastContainerBar";
import RentModal from "@/components/Modals/RentModal";

import Footer from "@/components/Footer";

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
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastContainerBar />
        <SearchModal />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <Navbar currentUser={currentUser} />

        <div className="pb-20 pt-28">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
