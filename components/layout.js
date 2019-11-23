import Header from "./Header";
import Footer from "./Footer";
import Meta from "./meta";

const Layout = props => {
  return (
    <div>
      <Meta />
      <Header>działa</Header>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
