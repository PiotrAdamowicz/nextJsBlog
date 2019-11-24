import Head from "next/head";
import color from "../Utils/colors";

const Meta = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Adamowicz Piotr Developer Blog</title>
    </Head>
    {/* FIXME: Looks like id dosen't work on dev. On production it works */}
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700&display=swap");
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: "Merriweather Sans", sans-serif;
        height: 100%;
        background-color: ${color.background};
      }
      a {
        text-decoration: none;
        color: white;
        cursor: pointer;
      }
    `}</style>
  </div>
);
export default Meta;
