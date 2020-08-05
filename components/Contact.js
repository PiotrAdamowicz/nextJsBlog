import { useForm } from "react-hook-form";
import colors from "../Utils/colors";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data, e);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="fs-frm"
        name="simple-contact-htmlForm"
        acceptCharset="utf-8"
        // action="https://htmlFormspree.io/xwkrynje" // comentu/uncoment to hook up mailing service
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <label htmlFor="full-name">Full Name</label>
          <input
            ref={register}
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required=""
          />
          <label htmlFor="email-address">Email Address</label>
          <input
            ref={register}
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="your@email.com"
            required=""
          />
          <label htmlFor="message">Message</label>
          <textarea
            ref={register}
            rows="5"
            name="message"
            id="message"
            placeholder="Type your message..."
            required=""
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact htmlForm Submission"
          />
        </fieldset>
        <input className="submitBtn" type="submit" value="Submit" />
      </form>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin: 5%;
          min-height: 77%;
        }
        fieldset {
          display: flex;
          flex-direction: column;
          border: none;
          margin-bottom: 2%;
          padding: 0;
        }
        label {
          margin-bottom: 2%;
        }
        input {
          background-color: ${colors.fontMedium};
          border: none;
          min-height: 15%;
          font-family: "Oswald", sans-serif;
           {
            /*need something better; Font*/
          }
          margin-bottom: 2%;
        }
        textarea {
          background-color: ${colors.fontMedium};

          border: none;
        }
        .submitBtn {
           {
            /* margin-top: 4%; */
          }
          min-height: 15%;
          cursor: pointer;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default Contact;
