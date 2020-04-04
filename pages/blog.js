import Layout from "../components/layout";
import Link from "next/link";
import colors from "../Utils/colors";

export default function Blog(props) {
  return (
    <Layout>
      <h1>Peter's blog</h1>
      <ul>Empty for now</ul>
      <style jsx>{`
        h1,
        a {
          font-family: "Arial";
        }
        h1 {
          color: ${colors.fontLarge};
        }
        a {
          color: ${colors.fontSmall};
          text-decoration: none;
        }
        a:hover {
          opacity: 0.6;
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }
      `}</style>
    </Layout>
  );
}
