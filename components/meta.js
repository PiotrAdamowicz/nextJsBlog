import Head from "next/head";
import { useState, useEffect } from "react";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Meta = () => {
  const size = useWindowSize();
  // console.log(size);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Adamowicz Piotr Front-End Developer</title>
        <link
          href="https://fonts.googleapis.com/css?family=Oswald:400,700&display=swap&subset=latin-ext&family=Zilla+Slab:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&family=Zilla+Slab+Highlight:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>{`
        html {
          font-size: 18px;
        }
        #__next {
          min-width: ${size.width}px;
          min-height: ${size.height}px;
        }
        @media (orientation: landscape) and (min-width: 1024px) {
          #__next {
            min-width: ${size.width - 20}px;
          }
        }
      `}</style>
    </>
  );
};

export default Meta;
