import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-6 border rounded-md p-14 border-richblack-700 layout">
      <div className="flex flex-col flex-wrap gap-2">
        <h1 className="heading text-richblack-5">
          Got a Idea? We’ve got the skills. Let’s team up
        </h1>
        <p className="text-base text-richblack-300">
          Tell us more about yourself and what you’re got in mind.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
