import Head from "next/head";

const Meta = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <tittle>Adamowicz Piotr Developer Blog</tittle>
    </Head>
    <style jsx global>{`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);
export default Meta;
