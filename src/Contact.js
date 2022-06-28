import React from "react";
import "./style/contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import ContactCard from "./Components/ContactCard";
export default function Contact() {
  return (
    <>
      <section className="contact-info">
        <section className="map container pt-3">
          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4428245614813!2d72.8846518144295!3d21.214281786795986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be049d12cf1945b%3A0x3830ad8be456b073!2sVR%20Digital%20Media!5e0!3m2!1sen!2sin!4v1655810967761!5m2!1sen!2sin"
              width="100%"
              height="300px"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </section>
        <section className="container card-contact">
          <ContactCard
            icon={<FaPhoneAlt className="fa-2x item" />}
            text="088662 97504"
          />
          <ContactCard
            icon={<FaMailBulk className="fa-2x item" />}
            text="vrdmsurat@gmail.com"
          />
        </section>
      </section>
    </>
  );
}
