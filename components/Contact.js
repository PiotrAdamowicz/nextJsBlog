import { useForm } from "react-hook-form";
import styles from "../styles/contact-form.module.scss";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data, e);

  return (
    <>
      <form
        className={styles.contact_form}
        onSubmit={handleSubmit(onSubmit)}
        id="fs-frm"
        name="simple-contact-htmlForm"
        acceptCharset="utf-8"
        action="https://htmlFormspree.io/xwkrynje" // comentu/uncoment to hook up mailing service
        method="post"
      >
        <fieldset className={styles.fieledset} id="fs-frm-inputs">
          <legend className={styles.legend}>
            If you want to contact me just fill up the form below and Submit:
          </legend>
          <label className={styles.label} htmlFor="full-name">
            Full Name
          </label>
          <input
            className={styles.input}
            ref={register}
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required=""
          />
          <label className={styles.label} htmlFor="email-address">
            Email Address
          </label>
          <input
            className={styles.input}
            ref={register}
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="your@email.com"
            required=""
          />
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={styles.message}
            ref={register}
            rows="5"
            name="message"
            id="message"
            placeholder="Type your message..."
            required=""
          ></textarea>
          <input
            className={styles.input}
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact htmlForm Submission"
          />
        </fieldset>
        <input
          className={`submitBtn ${styles.submitBtn} ${styles.input}`}
          type="submit"
          value="Submit"
        />
      </form>
      <style jsx>{``}</style>
    </>
  );
};

export default Contact;
