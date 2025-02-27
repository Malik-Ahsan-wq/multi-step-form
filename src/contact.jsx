
import React from 'react'
import "./contact.css"
import Swal from "sweetalert2";

function Contact(){
      const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "2d60a9ad-ba4b-4ea6-968f-5f674baf1c43");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }).then((res) => res.json());

        if (res.success) {
         Swal.fire({
           title: "Love you Bro!",
           text: "Message Sent Successfully!",
           icon: "success",
         });
        }
      };
   
    return (
      <section className="contact">
        <form onSubmit={onSubmit}>
          <h2>Contact Form</h2>
          <div className="input-box">
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              name='name'
              className="field"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Email adress</label>
            <input
              type="email"
              name='email'
              className="field"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Your message</label>
           <textarea name="message" placeholder='Enter your message' className='field mess' id=""></textarea>
          </div>
           <button type='submit'>Send message</button>
        </form>
      </section>
    );
}
export default Contact;