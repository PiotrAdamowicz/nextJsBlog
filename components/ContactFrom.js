import styles from "../styles/contact-form.module.scss";
import emailjs, { init } from "emailjs-com";

function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0pah77j",
        "template_z7s32ym",
        e.target,
        "user_YSKQRUHJ4CvGKJhToQaSR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form
      className={styles.contact_form}
      acceptCharset="utf-8"
      method="post"
      onSubmit={sendEmail}
    >
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          If you want to contact me just fill up the form below and Submit:
        </legend>
        <label htmlFor="from_name" className={styles.label}>
          Name:
        </label>
        <input
          type="text"
          name="from_name"
          className={styles.input}
          placeholder="your name"
        />
        <label htmlFor="user_email" className={styles.label}>
          Email:
        </label>
        <input
          type="email"
          name="user_email"
          className={styles.input}
          placeholder="your@email.com"
          required
        />
        <label htmlFor="user_email" className={styles.label}>
          Message:
        </label>
        <textarea
          name="message"
          className={styles.message}
          placeholder="Type your message..."
          rows="7"
          required
        />
        <input
          type="submit"
          value="Send"
          type="submit"
          className={`submitBtn ${styles.submitBtn} `}
        />
      </fieldset>
    </form>
  );
}

export default ContactForm;
