import { Link } from "react-router";
import { Mail } from "lucide-react";
import { SiInstagram } from '@icons-pack/react-simple-icons'

const Footer = () => {
  return (
    <footer className="text-foreground">
      <div className="studio-container py-16">
        <div className="grid grid-cols-1 mb:grid-cols-4 lg:grid-cols-4 justify-center md:gap-12">
          <div className="mb-4 md:col-span-2 max-w-110">
            <h2 className="text-title uppercase mb-4">bloom studio</h2>
            <p className="text-body text-muted-foreground-d">
              A sanctuary for mindful movement. Discover the transformative
              power of Pilates with personalized attention and expert guidance.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-ui text-muted-foreground-d tracking-wide uppercase">
              Navigate
            </h2>
            <ul className="text-body text-muted-foreground-d flex flex-col gap-2 mt-4">
              <li>
                <Link to={"/about"}>À propos</Link>
              </li>
              <li>
                <Link to={"/classes"}>Classes</Link>
              </li>
              <li>
                <Link to={"/online"}>Studio en ligne</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-ui text-muted-foreground-d tracking-wide uppercase">
              Connect
            </h2>
            <ul className="text-body text-muted-foreground-d flex flex-col gap-2 mt-4">
              <li>
                <Link className="flex items-center gap-2" to={"/about"}>
                  <Mail size={16} />
                  hello@bloomstudio.com
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2" to={"/classes"}><SiInstagram size={16} />@bloomstudio</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
