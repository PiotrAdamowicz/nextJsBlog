import Layout from "../components/layout";
import ContactForm from "../components/ContactForm";
import { useForm } from "react-hook-form"; //Will see if it's needed

/*
There will be few branches for contact forms to try out the best.
From:
https://stadtteilliebe.de/blog/serverless-contact-form
*/

// import UnderConstruction from "../components/underConstruction";

const contact = () => {
  return (
    <>
      <Layout>
        <main>
          <ContactForm></ContactForm>
          {/* <UnderConstruction></UnderConstruction> */}
        </main>
      </Layout>
      <style jsx>{``}</style>
    </>
  );
};

export default contact;
