import Layout from "../components/layout";
import { useForm } from "react-hook-form"; //Will see if it's needed

/*
There will be few branches for contact forms to try out the best.
From:
https://stadtteilliebe.de/blog/serverless-contact-form
*/

// import UnderConstruction from "../components/underConstruction";


  return (
    <>
      <Layout>
        <main>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Empty for now</label>
          </form>
          {/* <UnderConstruction></UnderConstruction> */}
        </main>
      </Layout>
      <style jsx>{``}</style>
    </>
  );
};

export default Contact;
