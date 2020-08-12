import Header from "./Header";
import Footer from "./Footer";
import Meta from "./meta";
import colors from "../Utils/colors";

//The parent tag is __next acessible in meta.js component

const Layout = (props) => {
  return (
    <>
      <Meta />
      <Header></Header>
      <main>{props.children}</main>
      <Footer></Footer>

      <style jsx>{`
        main {
          color: ${colors.font.tx.fontLarge};
        }
      `}</style>
    </>
  );
};

export default Layout;
