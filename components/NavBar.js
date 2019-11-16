import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About Page</a>
      </Link>
      <Link href="/blog">
        <a style={linkStyle}>Blog</a>
      </Link>
    </nav>
  );
};

export default NavBar;
