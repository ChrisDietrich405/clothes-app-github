import { useState, useRef, useEffect } from "react";

import styles from "./styles.module.css";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const inputRef = useRef();

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <h1>Love to hear from you,</h1>
          <h1>Get in Touch👋</h1>
        </div>
        <form className={styles.form_container} onSubmit={submit}>
          <div className={styles.grid_input}>
            <div className={styles.input_container}>
              <label htmlFor="name">Name</label>

              <input
                ref={inputRef}
                type="text"
                id="name"
                placeholder="Chris Dietrich"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
           

            <div className={styles.input_container}>
              <label htmlFor="email">Email</label>

              <input
                type="text"
                id="email"
                placeholder="chrisdietrich@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.input_container}>
              <label>Message </label>
              <textarea
              className={styles.text_area_container}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className={styles.submit_btn}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
