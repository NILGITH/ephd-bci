
import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "./ThemeSwitch";

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
      "min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/20 dark:from-slate-900 dark:via-slate-800/30 dark:to-emerald-900/20",
      geist.className
    )}>
      <Navigation currentPage={currentPage} />
      <main>
        {children}
      </main>
      <Footer />
      <ThemeSwitch />
    </div>
  );
}
