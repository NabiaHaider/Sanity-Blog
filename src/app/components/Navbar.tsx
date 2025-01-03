import Link from "next/link";
import ThemeProvider from "./ThemeProvider";
import SocialMedia from "./SocialMedia";


export default function Navbar() {
  return (
    <header className="flex flex-col xs:flex-row  py-4 px-4 border-b-2 border-accentDarkSecondary sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      <nav className="flex items-center justify-center gap-4 md:gap-24 font-bold mb-4 xs:mb-0">
        <Link href={"/"} className="text-2xl sm:text-3xl text-dark dark:text-light">
          Blog by <span className="text-orange-300">Nabia</span>
        </Link>
      </nav>
     <SocialMedia />
     <ThemeProvider />
    </header>
  );
}