import React from "react";
import ContactDetails from "../../components/core/ContactPage/ContactDetails";
import ContactUs from "../../components/core/ContactPage/ContactUs";
import { Footer, ReviewSlider } from "../../components/common";

const Contact = () => {
  return (
    <div className="bg-richblack-900">
      <div className="flex flex-col gap-14 layout md:flex-row-reverse">
        <ContactDetails />
        <ContactUs />
      </div>

      <ReviewSlider />
      <Footer />
    </div>
  );
};

export default Contact;
