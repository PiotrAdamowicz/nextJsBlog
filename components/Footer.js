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
      <style jsx>{`
        footer {
          width: 100%;
          height: 13%;

          background-color: ${color.main};
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        p {
          color: ${color.font};
          padding: 10px 10px;
        }
        div {
          width: 100%;
          height: 30px;
          background-color: ${color.main};
        }
        a {
          line-height: 30px;
          float: right;
          padding-right: 30px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Footer;
