import styles from "../styles/contact-form.module.scss";
import emailjs from "emailjs-com";
import { useForm, handleSubmit } from "react-hook-form";

function ContactForm() {
  const { register, errors, handleSubmit } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
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
    //TODO: hide IDs in .env
  }

  return (
    <form
      className={styles.contact_form}
      acceptCharset="utf-8"
      method="post"
      // onSubmit={sendEmail}
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
          ref={register({ minLenght: 3, maxLenght: 25 })}
        />
        <label htmlFor="user_email" className={styles.label}>
          Email:
        </label>
        <input
          type="email"
          name="user_email"
          className={styles.input}
          placeholder="your@email.com"
          ref={register}
        />
        <label htmlFor="user_email" className={styles.label}>
          Message:
        </label>
        <textarea
          name="message"
          className={styles.message}
          placeholder="Type your message..."
          rows="7"
          ref={register}
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
