
import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const geist = localFont({
  src: "../pages/fonts/GeistVF.woff",
});

interface LayoutProps {
  children: ReactNode;
  currentPage?: string;
}

export default function Layout({ children, currentPage }: LayoutProps) {
  return (
    <div className={cn(
      "min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/20",
      geist.className
    )}>
      <Navigation currentPage={currentPage} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
