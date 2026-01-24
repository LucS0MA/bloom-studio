import { Link } from "react-router";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${isScrolled ? "bg-muted-foreground-m-d backdrop-blur-sm" : "bg-transparent"}`}
    >
      <div className="studio-container text-primary-foreground w-full max-w-7xl">
        <div className="h-24 flex justify-between items-center ">
          <Link to={"/"}>
            <div className="text-title tracking-medium">Bloom Studio</div>
          </Link>
          {/* mobile navigation */}
          <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-transparent rounded-none cursor-pointer">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-foreground text-primary-foreground border-foreground p-0">
            <div className="flex flex-col gap-4 p-6">
              <ul className="tracking-wide flex flex-col gap-9 uppercase text-ui text-lit-primary-foreground li-hover">
            <li>
              <Link className="under-hover-w" to="/about">À propos</Link>
            </li>
            <li>
              <Link className="under-hover-w" to="/classes">Classes</Link>
            </li>
            <li>
              <Link className="under-hover-w" to="/online">Studio en ligne</Link>
            </li>
            <li>
              <Link className="under-hover-w" to="/contact">Contact</Link>
            </li>
          </ul>
            </div>
          </SheetContent>
        </Sheet>
        {/* desktop & tablet navigation */}
          <ul className="tracking-wide md:flex gap-9 uppercase text-ui text-lit-primary-foreground li-hover hidden">
            <li>
              <Link className="under-hover-w" to="/about">À propos</Link>
            </li>
            <li>
              <Link className="under-hover-w" to="/classes">Classes</Link>
            </li>
            <li>
              <Link className="under-hover-w" to="/online">Studio en ligne</Link>
            </li>
            <li>
              <Link className="under-hover-w" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
