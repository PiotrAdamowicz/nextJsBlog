import { useState } from "react";
import styles from "../styles/contact-form.module.scss";
import emailjs from "emailjs-com";

function ContactForm() {
  const [name, setName] = useState("your name");
  const [email, setEmail] = useState("your@email.com");
  const [message, setMessage] = useState("Type your message...");

  const handleValidation = () => {
    const state = [name, email, message];
    console.log(state);
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "from_name":
        setName({ name: e.target.value });
        break;
      case "user_email":
        setEmail({ email: e.target.value });
        break;
      case "message":
        setMessage({ message: e.target.value });
        break;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    handleValidation();

    //emailer hook up
    emailjs
      .sendForm(
        // "service_0pah77j",
        // "template_z7s32ym",
        e.target
        // "user_YSKQRUHJ4CvGKJhToQaSR"
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
  };

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
          onChange={handleChange}
          type="text"
          name="from_name"
          className={styles.input}
          placeholder={name}
        />
        <label htmlFor="user_email" className={styles.label}>
          Email:
        </label>
        <input
          onChange={handleChange}
          type="email"
          name="user_email"
          className={styles.input}
          placeholder={email}
        />
        <label htmlFor="user_email" className={styles.label}>
          Message:
        </label>
        <textarea
          onChange={handleChange}
          name="message"
          className={styles.message}
          placeholder={message}
          rows="7"
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
