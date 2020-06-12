
import React from "react";



const ContactForm = () => (
    <div className="col-lg-6 col-md-12 col-12">
  <div className="form">
    <form
      className="contact-form"
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="nom-complet"
          required="required"
          name="nom"
          placeholder="Nom complet"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="email"
          required="required"
          name="Email"
          placeholder="Adresse email"
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          className="form-control"
          id="phone"
          required="required"
          name="Telephonne"
          placeholder="Télephonne"
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          name="message"
          rows="3"
          id="message"
          required="required"
          placeholder="Message"
        ></textarea>
      </div>
      <div className="submit">
        <button className="btn btn-primary mb-2 submit">Envoyer</button>
      </div>
    </form>
  </div>
</div>

);

export default ContactForm;
