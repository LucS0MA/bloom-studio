import { Link } from "react-router";
import { useEffect, useState } from "react";

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
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${isScrolled ? "bg-foreground" : "bg-transparent"}`}
    >
      <div className="studio-container text-primary-foreground w-full max-w-7xl">
        <div className="h-24 flex justify-between items-center ">
          <Link to={"/"}>
            <div className="text-title tracking-medium">Bloom Studio</div>
          </Link>
          <ul className="tracking-wide flex gap-9 uppercase text-ui text-lit-primary-foreground li-hover">
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
