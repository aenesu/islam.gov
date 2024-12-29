import "./globals.css";
import { poppins } from "@/styles/fonts";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export const metadata = {
  title: "İslam Nedir | Anasayfa",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased flex flex-col w-[99.2vw]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
