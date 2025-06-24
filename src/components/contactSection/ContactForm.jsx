import { useRef } from "react";
import emailjs from "@emailjs/browser"
import { useState } from "react";

const ContactForm = () => {
  const form = useRef();
  const email_service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const email_template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const email_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleMessage = (e) => {
    setMessage(e.target.value); 
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(email_service, email_template, form.current, {
        publicKey: email_key,
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess(true);
          setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
       {/* Toast flotante */}
      {success && (
        <p className="text-orange text-bold">
          Message sent successfully!
        </p>
      )}
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightblue px-2"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightblue px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="9"
          cols="50"
          required
          className="rounded-lg bg-lightblue px-2"
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-lg border border-lightblue text-white h-12 font-bold text-xl hover:bg-color1 bg-darkCyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
