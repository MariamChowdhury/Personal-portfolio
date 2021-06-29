import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xxnl46y",
        "template_4118hsk",
        e.target,
        "user_gErDNv6c3u1jdrinz6jh9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact-container">
      <div className="container">
        <div className="row mt-5 ">
          <div className="col-md-6 mx-auto mt-5">
            <form className="contact-form" onSubmit={sendEmail}>
              <div class="form-class form-text container px-3 px-md-5 pt-5">
                <input
                  type="name"
                  class="form-control"
                  name="name"
                  id="exampleFormControlInput1"
                  placeholder="Your Name"
                />
              </div>
              <div class="container px-3 px-md-5 form-text pt-4">
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  id="exampleFormControlInput2"
                  placeholder="Your Email"
                />
              </div>
              <div class="form-class form-text px-3 px-md-5 container  pt-4">
                <input
                  type="subject"
                  class="form-control"
                  name="name"
                  id="exampleFormControlInput1"
                  placeholder="Subject"
                />
              </div>
              <div class="container form-text px-3 px-md-5 pt-4">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  rows="2"
                  placeholder="Your Message"
                ></textarea>
                <p className="form-paragraph">
                  Sending response to{" "}
                  <a href="mailto:mariamchowdhury.200@gmail.com">
                    mariamchowdhury.200@gmail.com
                  </a>
                </p>
              </div>
              <div className="container px-5">
                <div className="row">
                  <button
                    type="submit"
                    value="send"
                    class="btn btn-color mt-2 mb-4"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
