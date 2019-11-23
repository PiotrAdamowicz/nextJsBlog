import Head from "next/head";

const Meta = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Adamowicz Piotr Developer Blog</title>
    </Head>
    {/* FIXME: can't make global cursor: pointer work */}
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700&display=swap");
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: "Merriweather Sans", sans-serif;
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
