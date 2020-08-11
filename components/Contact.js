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
          <legend>
            If you want to contact me just fill up the form belowe:
          </legend>
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
      <style jsx>{``}</style>
    </>
  );
};

export default Contact;
