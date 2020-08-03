import Layout from "../components/layout";
import Contact from "../components/Contact";
import { useForm } from "react-hook-form";

// import UnderConstruction from "../components/underConstruction";
const contact = () => {
  return (
    <>
      <Layout>
        <main>
          <Contact></Contact>
        </main>
      </Layout>
      <style jsx>{``}</style>
    </>
  );
};

export default contact;
