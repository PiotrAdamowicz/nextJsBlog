import Layout from "../components/layout";
import poohImg from "../img/pooh.jpg";

const Index = () => (
  <>
    <Layout>
      <h1>Hello Jacob</h1>
      <img src={poohImg}></img>
    </Layout>
    <style jsx global>
      {``}
    </style>
  </>
);

export default Index;
