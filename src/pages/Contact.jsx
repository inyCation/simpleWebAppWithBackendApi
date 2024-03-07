import React from 'react'
import {Header,Footer} from "../components"


const Contact = () => {
  return (
    <>
    <Header />
      <div className="contact_body">
        <div className="officeAddress">
          <h3>Visit Us At Our Office</h3>
            <div className="address">
              <h5>Address:</h5> 123 Main Street, Cityville, State, Zip Code
              <br />
              <h5>Phone:</h5> Phone: (555) 123-4567
              <br />
              <h5>Email:</h5> info@example.com
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.6334758400744!2d85.1011281689!3d25.583858184110454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed573ec217e54f%3A0xc2c9f6bc50c0a5f4!2sSanjay%20Oil%20Mil!5e0!3m2!1sen!2sin!4v1709811972077!5m2!1sen!2sin" width="320" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
       

          <form method="post">
            <div className="name">
              <label htmlFor="name">Your Name - </label>
              <input type="text" name="name" id="name" placeholder='Your Name' />
            </div>
            <div className="email">
              <label htmlFor="email">Your Email - </label>
              <input type="email" name="email" id="email" placeholder='Your Email' />
            </div>
            <textarea type="text" name="message" id="message" placeholder='Your Message' />
            <button type="submit">Submit</button>
          </form>
      </div>
      
    <Footer />
  </>
  )
}

export default Contact