import React, { useState } from "react";
import IconBtn from "../../components/common/IconBtn";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { resetPassToken } from "../../services/operations/authApi";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getFormData = async (formData) => {
    // console.log(formData)
    setEmail(formData.email);
    dispatch(resetPassToken(formData.email, setEmailSent));
  };

  return (
    <div className="text-richblack-5 grow">
      <div className="flex justify-center layout">
        <div className="flex flex-col gap-5 w-full max-w-[500px]">
          <h1 className="heading">
            {emailSent ? "Check email" : "Reset your password"}
          </h1>

          <p className="text-lg text-richblack-100">
            {emailSent
              ? `We have sent the reset email to ${email}`
              : "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"}
          </p>
          <form
            onSubmit={handleSubmit((data) => getFormData(data))}
            className="flex flex-col gap-6"
          >
            {!emailSent && (
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm">
                  Email Address <sup className="text-pink-200">*</sup>
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
            )}
            <IconBtn active={true} type="submit">
              {emailSent ? "Resend email" : "Reset Password"}
            </IconBtn>
          </form>
          <Link to="/login" className="flex items-center gap-2">
            <HiOutlineArrowNarrowLeft className="text-xl" />
            <p>Back to login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
