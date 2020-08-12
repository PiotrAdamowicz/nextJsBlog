import Link from "next/link";
import colors from "../Utils/colors";

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
      <style jsx>{`
        footer {
          display: flex;
          background-color: ${colors.main_op2};
          justify-content: space-around;
          width: 100%;
        }
        a,
        p {
          display: block;
          font-size: 1em;
          line-height: 3.5em;
          color: ${colors.font.fn.navStandard};
        }
      `}</style>
    </>
  );
};

export default Footer;
