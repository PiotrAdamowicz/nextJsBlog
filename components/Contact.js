import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data, e);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="fs-frm"
        name="simple-contact-htmlForm"
        accept-charset="utf-8"
        // action="https://htmlFormspree.io/xwkrynje"
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <label htmlhtmlFor="full-name">Full Name</label>
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
            placeholder="Aenean lacinia "
            required=""
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact htmlForm Submission"
          />
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Contact;
