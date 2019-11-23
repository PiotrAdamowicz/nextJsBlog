import Link from "next/link";

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
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/cv">
          <a>Resume</a>
        </Link>
      </nav>
      <style jsx>{`
        a {
          text-decoration: none;
          padding: auto;
          padding-right: 20px;
          font-family: "Merriweather Sans", sans-serif;
          color: white;
        }
      `}</style>
    </>
  );
};

export default NavBar;
