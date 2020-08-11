import Link from "next/link";
import colors from "../Utils/colors";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/cv">
          <a>Resume</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
      <style jsx>{``}</style>
    </>
  );
};

export default NavBar;
