import Header from "./Header";
import Footer from "./Footer";
import Meta from "./meta";

const Layout = (props) => {
  return (
    <>
      <Meta />
      <Header></Header>
      <main>{props.children}</main>
      <Footer></Footer>

      <style jsx>
        {`
          main {
            min-height: 77%;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
