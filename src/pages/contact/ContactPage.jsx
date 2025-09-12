import React from "react";
import HeroContact from "./HeroContact";
import ContactForm from "./ContactForm";
import Watch from "../../components/Watch";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <HeroContact />
      <ContactForm />
      <Watch />
    </div>
  );
};

export default ContactPage;
