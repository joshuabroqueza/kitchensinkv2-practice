import React, { useState } from "react";
import "../Styles/form.css";

function Form() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
    // setInput(" ");

    console.log("value is:", event.target.value);
  };

  const handleSubmit = () => {
    setItems([...items, message]);
    setInput("");
    console.log((document.getElementById("message").value = ""));
  };

  return (
    <div className="history">
      <div className="form__left">
        <h4>FORM CONTAINER</h4>
        <input
          placeholder="Insert a text here"
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={message}
        />

        <h5>Message: {message}</h5>
        <button onClick={handleSubmit}>SEND</button>
      </div>
      <div className="form__right">
        <div className="form__history">
          <h4>SUBMIT HISTORY</h4>
        </div>
        <div className="form__items">
          {items.map((items, index) => (
            <span key={index}>
              {index + 1}. {items}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Form;
