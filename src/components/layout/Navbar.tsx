import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex items-center justify-between p-4">

        <Link to="/" className="font-bold">
          Mahdi Mousavi
        </Link>

        <div className="flex gap-5">
          <Link to="/about">
            About
          </Link>

          <Link to="/experience">
            Experience
          </Link>

          <Link to="/projects">
            Projects
          </Link>

          <Link to="/resume">
            Resume
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </div>

      </nav>
    </header>
  );
}