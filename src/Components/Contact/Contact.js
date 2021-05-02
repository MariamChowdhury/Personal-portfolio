import React from 'react';
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="row">
        <div className="col-md-6 mx-auto">
   <div class="form-class form-text container">
  <label for="exampleFormControlInput1" class="form-label">Your Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" />
</div>
<div class="container form-text">
  <label for="exampleFormControlInput2" class="form-label">Your Email</label>
  <input type="text" class="form-control" id="exampleFormControlInput2" />
</div>
<div class="container form-text">
  <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <p className='form-paragraph'>Sending response to mariamchowdhury.200@gmail.com</p>
</div>
</div>
</div>
    </div>
  );
};

export default Contact;