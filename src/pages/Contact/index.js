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
      <div>
        <form className={styles.form_container} onSubmit={submit}>
          <h2>Get in touch!</h2>
          <div>
            <label htmlFor="name">
              First Name
              <input
                ref={inputRef}
                type="text"
                id="name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="name">
              Last Name
              <input
                type="text"
                id="name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Message
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="sign-in-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
