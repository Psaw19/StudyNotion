import React from "react";
import ContactForm from "../ContactPage/ContactForm";

const ContactUs = () => {
  return (
    <div className="text-richblack-5 max-w-[1440px] mx-auto px-[120px] flex justify-center">
      <div className="flex flex-col gap-6 py-10 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold text-center text-richblack-5">
            Get in Touch
          </h1>
          <p className="text-base text-center text-richblack-300">
            We'd love to here for you, Please fill out this form.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
