import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import countryCode from "../../../data/countrycode.json";
import { useDispatch } from "react-redux";
import { contact } from "../../../services/operations/contactApi";

const ContactForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const getFormData = async (formData) => {
    dispatch(contact(formData));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        phoneNumber: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="text-richblack-5">
      <form onSubmit={handleSubmit((data) => getFormData(data))}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            {/* First Name */}
            <div className="flex flex-col gap-2 grow">
              <label htmlFor="firstName" className="text-sm">
                First Name
              </label>
              <input
                className="p-3 outline-none bg-richblack-800 placeholder:text-richblack-200 rounded-md shadow-richblack-600 shadow-[0_1px_0_0] placeholder:font-medium"
                placeholder="Enter first name"
                type="text"
                id="firstName"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <div className="mt-1 text-xs text-brown-100">
                  Please enter your name
                </div>
              )}
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2 grow">
              <label htmlFor="lastName" className="text-sm">
                Last Name
              </label>
              <input
                className="p-3 outline-none bg-richblack-800 placeholder:text-richblack-200 rounded-md shadow-richblack-600 shadow-[0_1px_0_0] placeholder:font-medium"
                placeholder="Enter last name"
                type="text"
                id="lastName"
                {...register("lastName")}
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm">
              Email Address<sup className="text-pink-200">*</sup>
            </label>
            <input
              className="p-3 outline-none bg-richblack-800 placeholder:text-richblack-200 rounded-md shadow-richblack-600 shadow-[0_1px_0_0] placeholder:font-medium no-arrow"
              placeholder="Enter email address"
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <div className="mt-1 text-xs text-brown-100">
                Please enter your email
              </div>
            )}
          </div>

          {/* Contact */}

          <div className="flex flex-col gap-2">
            <label htmlFor="phoneNumber" className="text-sm">
              Phone Number
            </label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                id="countryCode"
                className="w-[78px] shadow-richblack-600 shadow-[0_1px_0_0] px-2 rounded-md outline-none bg-richblack-800"
                {...register("countryCode")}
              >
                {countryCode.map((val) => (
                  <option key={val.country} value={`${val.code}`}>
                    {`${val.code} - ${val.country}`}
                  </option>
                ))}
              </select>
              <input
                className="p-3 outline-none bg-richblack-800 placeholder:text-richblack-200 rounded-md shadow-richblack-600 shadow-[0_1px_0_0] placeholder:font-medium w-full no-arrow"
                placeholder="01234 56789"
                type="tel"
                name="phoneNumber"
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Please enter your contact",
                  },
                  maxLength: {
                    value: 11,
                    message: "Please enter a valid number",
                  },
                  minLength: {
                    value: 8,
                    message: "Please enter a valid number",
                  },
                })}
              />
            </div>
            {/* {console.log(errors)} */}
            {errors.phoneNumber && (
              <div className="mt-1 text-xs text-brown-100">
                {" "}
                {errors.phoneNumber.message}{" "}
              </div>
            )}
          </div>

          {/* Text Area */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              className="p-3 outline-none bg-richblack-800 placeholder:text-richblack-200 rounded-md shadow-richblack-600 shadow-[0_1px_0_0] placeholder:font-medium"
              placeholder="Enter your message"
              id="message"
              name="message"
              rows="5"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <div className="mt-1 text-xs text-brown-100">
                Please enter your message
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-3 text-base font-medium text-center rounded-md bg-yellow-50 text-richblack-900"
          >
            Send Message
          </button>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default ContactForm;
