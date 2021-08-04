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
        <h2>Contact</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
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
