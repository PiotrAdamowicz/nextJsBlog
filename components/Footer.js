import Link from "next/link";
import color from "../Utils/colors";

const Footer = () => {
  return (
    <>
      <footer>
        <p>Made by Piotr Adamowicz from Next.js docs</p>
        <div>
          <Link href="/contact">
            <a>Contact me</a>
          </Link>
        </div>
      </footer>
      <style jsx>{``}</style>
    </>
  );
};

export default Footer;
