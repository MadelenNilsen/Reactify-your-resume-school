import React, { useState, useRef, useEffect } from 'react'; // Imported useState, useRef and useEffect



function Contact() { // Contact component
  const [name, setName] = useState(''); // useState hook is used to create state variables for name, email and message. These state variables hold the values entered by the user in the form fields.
  const [email, setEmail] = useState('');// useState hook is used to create state variables for name, email and message. These state variables hold the values entered by the user in the form fields.
  const [message, setMessage] = useState(''); // useState hook is used to create state variables for name, email and message. These state variables hold the values entered by the user in the form fields.

  const nameInputRef = useRef(null); // Creates a reference to the "name" input field so it focuses on it automatically.

  useEffect(() => { { /*useEffect hook runs after the component renders. */ }
    nameInputRef.current.focus(); // Automatically focuses on 'name' input field on first render.
  },[]);

  const handleSubmit = (e) => { { /* handleSubmit is a function that is called when the form is submitted. */ }
    e.preventDefault(); { /* Prevents default form submission behavior which would cause the page to reload.  */ }
    alert('Thank you for reaching out to me!'); // Alert that pops up after pressit submit button.
    console.log('Form Data:', { name, email, message }); // Logged to the console for debugging purposes.
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form"> { /*The form element uses the handleSubmit function for the form submission. */ }
      <section className="contact-row">
      <label htmlFor="name">Name:</label> { /*label element for accessibility*/ }
      <input // Here user can input information.
      ref={nameInputRef}
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)} //The onChange event handlers update the state as the user types.
        placeholder="Input name..."
      />

      <label htmlFor="email">Email:</label> { /*label element for accessibility*/ }
      <input // Here user can input information.
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} //The onChange event handlers update the state as the user types.
        placeholder="Input email..."
      />
      </section>

      <label htmlFor="message">Message:</label> { /*label element for accessibility*/ }
      <textarea // Here user can input information.
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)} //The onChange event handlers update the state as the user types.
        placeholder="Write your message here..."
      />

      <button type="submit" className="contact-btn">Submit</button> { /*Triggers form submission */ }
    </form>
  );
}

export default Contact; // Exports Contact component so it can be used elsewhere.
