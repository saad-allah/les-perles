
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
     <input type="hidden" name="bot-field" />
   <input type="hidden" name="form-name" value="ontact-form" />
      <div className="form-group">
     <label>
        <input
          type="text"
          className="form-control"
          id="nom-complet"
          required="required"
          name="nom"
          placeholder="Nom complet"
        />
     </label>
      </div>
      <div className="form-group">
     <label>
        <input
          type="email"
          className="form-control"
          id="email"
          required="required"
          name="Email"
          placeholder="Adresse email"
        />
     </label>
      </div>
      <div className="form-group">
     <label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          required="required"
          name="Telephonne"
          placeholder="Télephonne"
        />
     </label>
      </div>
      <div className="form-group">
     <label>
        <textarea
          className="form-control"
          name="message"
          rows="3"
          id="message"
          required="required"
          placeholder="Message"
        ></textarea>
     </label>
      </div>
      <div className="submit">
        <button className="btn btn-primary mb-2 submit">Envoyer</button>
      </div>
    </form>
  </div>
</div>

);

export default ContactForm;
