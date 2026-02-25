import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Logo } from "@/public";
import Menu from '@/src/components/Menu'
import Navbar from "@/src/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function DashaboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex justify-center ">
        {/* HERE IS THE LEFT SIDE */}
        <div className="w-[20%] md-[15%] lg-[20%] bg-red-200" style={{ }}>
          <Link href="/" className="flex justify-center lg:justify-start items-center gap-2">
          <Image src={Logo} alt="School logo" height={35} width={35} />
          <span className="hidden lg:block"> ScholarStack</span>
          </Link>

          <Menu />
        </div>

        {/*HERE IS THE RIGHT SIDE */}
        <div className="w-[80%] md-[85%] lg-[75%] bg-blue-200 overflow-scroll" style={{ }}>
          <Navbar/>
          {children}</div>
    </div>
  );
}
