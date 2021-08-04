import { useState } from "react";
import "../contact/ContactStyle.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <br />
        <br />
        <br />
        <h2>Drop me a message</h2>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <h3>Full Name</h3>
          <input type="text" placeholder="What is your full name?" />
          <br />
          <h3>Email address</h3>
          <input type="text" placeholder="you@example.com" />
          <br />
          <h3>Message</h3>
          <textarea placeholder="Write your message here"></textarea>
          <br />
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
      <div className="right">
        <img src="resources/contact.svg" alt="" />
      </div>
    </div>
  );
};
export default Contact;
