import React, { useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import IconBtn from "../../components/common/IconBtn";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../services/operations/authApi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [reset, setReset] = useState(false);
  const [email, setEmail] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const token = location.pathname.split("/").at(-1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getFormData = async (formData) => {
    console.log(formData);
    dispatch(updatePassword(formData, token, setReset, setEmail));
  };

  return (
    <div className="text-richblack-5 grow">
      <div className="max-w-[1440px] mx-auto px-[120px] py-24 flex justify-center">
        <div className="flex flex-col w-1/3 gap-5">
          <h1 className="text-4xl font-semibold">
            {reset ? "Reset complete!" : "Choose  new password"}
          </h1>
          <p className="text-lg text-richblack-100">
            {reset
              ? `All done! We have sent an email to ${email} to confirm`
              : "Almost done. Enter your new password and youre all set."}
          </p>
          {!reset && (
            <form
              onSubmit={handleSubmit((data) => getFormData(data))}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm">
                  Password <sup className="text-pink-200">*</sup>
                </label>
                <div className="flex items-center p-3 rounded-md shadow-[0_1px_0_0] shadow-richblack-600 bg-richblack-800 ">
                  <input
                    className="placeholder:text-richblack-200 placeholder:text-base placeholder:font-medium focus:outline-none grow bg-richblack-800"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password", { required: true })}
                  />
                  {showPassword ? (
                    <AiOutlineEyeInvisible
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <AiOutlineEye
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="cursor-pointer"
                    />
                  )}
                </div>
                {errors.email && (
                  <div className="mt-1 text-xs text-brown-100">
                    Please enter your password
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="confirmPassword" className="text-sm">
                  Confirm Password <sup className="text-pink-200">*</sup>
                </label>
                <div className="flex items-center p-3 rounded-md shadow-[0_1px_0_0] shadow-richblack-600 bg-richblack-800 ">
                  <input
                    className="placeholder:text-richblack-200 placeholder:text-base placeholder:font-medium focus:outline-none grow bg-richblack-800"
                    placeholder="Re-enter your password"
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    {...register("confirmPassword", { required: true })}
                  />
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="cursor-pointer "
                    />
                  ) : (
                    <AiOutlineEye
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="cursor-pointer"
                    />
                  )}
                </div>
                {errors.email && (
                  <div className="mt-1 text-xs text-brown-100">
                    Please re-enter your password
                  </div>
                )}
              </div>
              <IconBtn active={true} type="submit">
                Reset Password
              </IconBtn>
            </form>
          )}

          {reset && (
            <Link
              to="/login"
              className="px-5 py-2 text-base font-medium text-center rounded text-richblack-900 bg-yellow-50"
            >
              Return to login
            </Link>
          )}

          <Link to="/login" className="flex items-center gap-2">
            <HiOutlineArrowNarrowLeft className="text-xl" />
            <p>Back to login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
