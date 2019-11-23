import Header from "./Header";
import Footer from "./Footer";
import Meta from "./meta";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => {
  return (
    <div style={layoutStyle}>
      <Meta />
      <Header>działa</Header>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
