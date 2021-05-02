import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="row mt-5">
        <div className="col-md-6 mx-auto mt-5">
          <form className='contact-form'
            action="https://formsubmit.co/mariamchowdhury.200@gmail.com"
            method="POST"
          >
            <div class="form-class form-text container px-5 pt-5">
              <input
                type="name"
                class="form-control"
                name="name"
                id="exampleFormControlInput1"
                placeholder="Your Name"
              />
            </div>
            <div class="container form-text px-5  pt-4">
              <input
                type="text"
                class="form-control"
                name="email"
                id="exampleFormControlInput2"
                placeholder="Your Email"
              />
            </div>
            <div class="container form-text px-5 pt-4">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                name="textarea"
                rows="2"
                placeholder="Your Message"
              ></textarea>
              <p className="form-paragraph">
                Sending response to mariamchowdhury.200@gmail.com
              </p>
            </div>
            <div className="container px-5">
              <div className="row">
              <button type="submit" class="btn btn-color mt-2 mb-4">
                Submit
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
