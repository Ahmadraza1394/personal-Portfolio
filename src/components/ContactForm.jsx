import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import img from "/images/graph.png";

const ContactForm = () => {
  const form = useRef();
  const [alert, setAlert] = useState({ message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wuajhr5",
        "template_6gguoa9",
        form.current,
        "tV4uPzjmtHiMmsQWh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlert({
            message: "Thanks for contacting us. We will contact you soon!",
            type: "success",
          });
        },
        (error) => {
          console.log(error.text);
          setAlert({
            message: "Something went wrong. Please try again later.",
            type: "error",
          });
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact-section p-8 bg-black text-white relative">
      {alert.message && (
        <div
          className={`alert ${
            alert.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white p-4 rounded-md absolute top-4 left-1/2 transform -translate-x-1/2`}
        >
          {alert.message}
        </div>
      )}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
        <div className="hidden lg:block">
          <i className="fas fa-envelope fa-3x text-green-500 pulsate-bck"></i>
          <img src={img} alt="Contact Us" className="rounded-lg shadow-md " />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center text-green-500">
            Contact Me
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="user_name"
                className="form-input"
                placeholder="Your name"
                required
              />
              <label htmlFor="name" className="form-label">
                Name
              </label>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="user_email"
                className="form-input"
                placeholder="Your email"
                required
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Subject"
                required
              />
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="form-input"
                placeholder="Your message"
                required
              ></textarea>
              <label htmlFor="message" className="form-label">
                Message
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-md transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
