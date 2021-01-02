import styles from "../styles/contact-form.module.scss";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("https://formspree.io/f/xwkrynje");
  if (state.succeeded) {
    return <p>Thanks for the message!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={styles.contact_form}
      acceptCharset="utf-8"
      method="post"
    >
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          If you want to contact me just fill up the form below and Submit:
        </legend>
        <label htmlFor="email" className={styles.label} htmlFor="email-address">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className={styles.input}
          placeholder="your@email.com"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.message}
          placeholder="Type your message..."
          rows="7"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          className={`submitBtn ${styles.submitBtn} `}
          disabled={state.submitting}
        >
          Submit
        </button>
      </fieldset>
    </form>
  );
}

export default ContactForm;
