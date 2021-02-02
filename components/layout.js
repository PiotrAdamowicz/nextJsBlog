import Header from "./Header";
import Footer from "./Footer";
import Meta from "./meta";

//The parent tag is __next accessible in meta.js component

const Layout = (props) => {
  return (
    <>
      <Meta />
      <Header></Header>
      <main>{props.children}</main>
      <Footer></Footer>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          min-height: 80%;
        }
      `}</style>
    </>
  );
};

export default Layout;
