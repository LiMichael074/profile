import "./Contact.css";
import "./LinkButtons";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "Name: " + name + "\n" + "Email: " + email + "\n" + "Message: " + message
    );
  };
  return (
    <>
      <h1>Contact</h1>
      <form
        className="grid-container_contact"
        action=""
        onSubmit={handleSubmit}
      >
        <label className="titel1">Name:</label>
        <input
          type="text"
          id="name"
          className="input1 text_input"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder="Your Name"
        ></input>
        <label className="titel2">Email:</label>
        <input
          type="text"
          id="email"
          className="input2 text_input"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="Your Email"
        ></input>
        <label className="titel3">Message:</label>
        <input
          type="text"
          id="message"
          className="input3 text_input"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          placeholder="Your Message"
        ></input>
        {message.length > 10 ? (
          <input type="submit" className="submit" value="submit"></input>
        ) : (
          <input
            type="submit"
            className="submit disabled"
            value="submit"
            disabled
          ></input>
        )}
      </form>
    </>
  );
};

export default Contact;
