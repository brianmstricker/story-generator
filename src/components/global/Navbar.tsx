import Link from "next/link";
import { FaBook } from "react-icons/fa";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
 return (
  <header className="py-6 bg-foreground/5">
   <nav className="contain flex items-center justify-between">
    <Link href="/" className="flex items-center gap-1.5">
     <FaBook className="text-[1.2rem]" />
     <div className="text-[1.7rem]">Scriptor</div>
    </Link>
    <div className="flex items-center gap-3 sm:gap-6">
     <Link href="/stories">Stories</Link>
     <ThemeToggleButton />
    </div>
   </nav>
  </header>
 );
};
export default Navbar;
