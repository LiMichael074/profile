import "./Contact.css";
import "./LinkButtons";
import LinkButtons from "./LinkButtons";

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <form className="grid-container_contact">
        <label className="titel1">Name:</label>
        <input
          type="text"
          id="name"
          className="input1 text_input"
          placeholder="Your Name"
        ></input>
        <label className="titel2">Email:</label>
        <input
          type="text"
          id="email"
          className="input2 text_input"
          placeholder="Your Email"
        ></input>
        <label className="titel3">Message:</label>
        <input
          type="text"
          id="message"
          className="input3 text_input"
          placeholder="Your Message"
        ></input>
        <input type="submit" className="submit" value="submit"></input>
      </form>
      <LinkButtons />
    </>
  );
};

export default Contact;
