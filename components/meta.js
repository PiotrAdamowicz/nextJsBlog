import Head from "next/head";
import color from "../Utils/colors";

const Meta = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Adamowicz Piotr Developer Blog</title>
      <link
        href="https://fonts.googleapis.com/css?family=Oswald:400,700&display=swap&subset=latin-ext"
        rel="stylesheet"
      ></link>
    </Head>
    <style jsx global>{`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: "Oswald", sans-serif;
        height: 100%;
        background-color: ${color.background};
      }
      #__next{
        height: inherit;
      }
      a {
        text-decoration: none;
        color: white;
        cursor: pointer;
      }

      @media (min-width: 360px) and (orientation: portrait) {
        body {
          height: 640px;
        }
      }
    `}</style>
  </>
);
export default Meta;
